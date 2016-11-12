
const fs = require('fs');
class fontUtil {
    static load(fontpath){
        return new Promise((resolve, reject)=>{
            fs.readFile(fontpath, (err, content)=>{
                if(err){
                    console.error(err);
                    reject(err)
                    return false;
                }
                resolve(content);
                return true;
            });
        });
    }
}
module.exports = fontUtil;