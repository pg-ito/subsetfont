"use strict";
const co = require('co');
const srv = require('http');
const conf = require('./conf/config.js');
const fontUtil = require('./lib/fontUtil.js');
const response = require('./lib/response.js');

let resObj = new response();


co(function* (){
    response.fontBuff = yield fontUtil.load(conf.fontpath);
    srv.createServer((req,res)=>resObj.router(req,res))
    .listen(8080, '127.0.0.1');
});
