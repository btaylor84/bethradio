'use strict';
/*
const request = require('request');

console.log('trying request');
request({
    method: 'GET',
    url: 'http://75.102.43.194:80/kwmu1-nopreroll',
    headers: {
        'icy-metadata' : 1
    }
},
    function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            // hmmm .... stuff it on the screen?
            let el = document.getElementById("title-text");
            el.innerHTML = JSON.stringify(body);
        }
    }
);
*/

/*
const icy = require('icy');
const devnull = require('dev-null');
const url = "http://75.102.43.194:80/kwmu1-nopreroll";

icy.get(url, function(res) {
    console.log(res.headers);
    
    res.on('metadata', function (metadata) {
        var parsed = icy.parse(metadata);
        console.log(parsed);
    });
    
    res.pipe(devnull());
});

console.log('meta done');
*/

const request = require('request');
const url = 'https://api.composer.nprstations.org/v1/widget/5182a93be1c876c6464716bd/now?format=json';
const Vue = require('vue');

request(url, function(error, response, body) {
    if (!error) {
        // console.log(body);
        body = JSON.parse(body);
        //let program = body.onNow.program.name;
        //let upNext  = body.nextUp[0].program.name;
        //let nextAt  = body.nextUp[0].start_time;
        //let station = body.ucs.fullname;
        //console.log(program, upNext, nextAt, station);
        //console.log("data dumped");
        new Vue({
            el: '#radio-title',
            data: { 
                station: body.ucs.fullname
            }
        });
        new Vue({
             el: "#program-title",
             data: {
                 program: body.onNow.program.name
             }
         });
         new Vue({
             el: "#on-next",
             data: {
                 upNext: body.nextUp[0].program.name,
                 time: body.nextUp[0].start_time
             }
         });
    }
});

