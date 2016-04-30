'use strict';

var request = require('request');
var url = 'https://api.composer.nprstations.org/v1/widget/5182a93be1c876c6464716bd/now?format=json';
var Vue = require('vue');

var radioData = new Vue({
    el: '.radio',
    data: { 
        station: "",
        prog: "",
        upNext: "",
        timeNext: "",
    }
});

function setRadioData () {    
    request(url, function(error, response, body) {
        if (!error) {
            // console.log(body);
            body = JSON.parse(body);
            // put interesting data into Vue.js data element for .radio
            radioData.station = body.ucs.fullname;
            radioData.prog = body.onNow.program.name;
            radioData.upNext = body.nextUp[0].program.name;
            radioData.timeNext = body.nextUp[0].start_time;
        }
    });
};

// first call to get things going
setRadioData();

// check for updates on programming every minute
setInterval( setRadioData, 60000);

