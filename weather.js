'use strict';

const local_lat = '38.7254';
const local_lng = '-90.4597';
const APIKey = 'cefd4b691530a7717e1320c049d10b30';

var Forecast = require('forecast.io');
var request = require('request');
var Vue = require('vue');
var skycons = new Skycons();

var options = {
    APIKey: 'cefd4b691530a7717e1320c049d10b30',
};

request( `https://api.forecast.io/forecast/${APIKey}/${local_lat},${local_lng}`,
    function (error, response, body) {
        if (error) throw error;
        //console.log(body);
        body = JSON.parse(body);
        new Vue({
            el: '#current',
            data: {
                temp: body.currently.temperature,
                icon: body.currently.icon,
                summary: body.currently.summary,
            }
        });
        skycons.add("icon",body.currently.icon); 
        skycons.play();
    }    
);
