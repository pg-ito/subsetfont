const url = require('url');
const Fontmin = require('fontmin');

class response {
    constructor(){
        this.fontmin = null;
        
    }

    // @TODO return cached ascii font when only ascii chars
    fontSetup(unique){
        if(!response.fontBuff){
            throw new Exception('response.fontBuff is null !');
        }
        return new Fontmin()
        .src(response.fontBuff)
        .use(Fontmin.glyph({
            text:unique
        }));
    }
    router(req, res){
        let body = '';
        // console.log(req.method);

        switch(req.method){
            case 'POST':
            case 'GET':
            default:
                let params = url.parse(req.url, true);
                let unique = this.unique( (params.query.str)?params.query.str:'' );
                this.fontMinimize(unique).then((font)=>{
                    res.writeHead(200, {"Content-Type": "application/x-woff .woff"});
                    res.write(font.contents);    
                    res.end();
                }).catch((err)=>{
                    res.writeHead(404, {"Content-Type": "text/html"});
                    res.end();
                });
                break;

        }


    }

    unique(str){
        str = str||'';
        if(!str){
            return [];
        }
        let chars = str.split('');
        let unique = chars.filter(
            (char, i, self)=>{
                return (self.indexOf(char)===i);
            }
        );
        return unique.join('');
    }

    fontMinimize(unique){
        if(!unique){
            return '';
        }
        let subset = null;
        let fontmin = this.fontSetup(unique);

        let d = new Promise((resolve, reject)=>{
            fontmin.run((err, files, stream)=>{
                if(err){
                    console.log(err);
                    reject(null);
                    return false;
                }
                if(!files || files.length<1){
                    console.error('font file is null!');
                    reject(null);
                    return false;
                }

                // console.log(files);

                resolve(files[0]);
                return true;
            });
        });
        return d;
    }
}

response.fontBuff = null;

module.exports = response;
