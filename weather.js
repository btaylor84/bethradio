'use strict';

var config = require("./config");

const local_lat = '38.6337567';
const local_lng = '-90.374482';
const APIKey = config.APIKey;       // key from forecast.io

var Forecast = require('forecast.io');
var request = require('request');
var Vue = require('vue');
var skycons = new Skycons({
    "monochrome" : false,
    "colors" : {
        "cloud" : "#5d636a",
        "main"  : "#336699",
        "sun"   : "#ecc422",
        "snow"  : "#bac6cd",
        "fog"   : "#bac6cd",
        "rain"  : "#5d636a",
}});
skycons.add("icon");

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

var daycons = new Skycons({
    "monochrome" : true,
    "color"      : "#5d636a",
});
        
for (var day = 0; day < 7; day++) {
    daycons.add(`icon-${dayNames[day]}`);
}

var wvm = new Vue({
    el: '.weather',
    data: {
        temp: "",
        icon: "",
        summary: "",
        hourSummary: "",
        daySummary: "",
        weekSummary: "",
        dailyWeather: [
            {   summary: "",
                icon: "",
                lowTemp: "",
                highTemp:"",
                dayName:"",
            }
        ],   // populate as the next seven days. do it every time for now.
        alerts: [],
    }
});

// make sure there are 7 array entries for a week of data
_.times(6, () => wvm.dailyWeather.push( 
              {   summary: "",
                icon: "",
                lowTemp: "",
                highTemp:"",
                dayName:"",
            }
));

function setWeatherData () {
    request( `https://api.forecast.io/forecast/${APIKey}/${local_lat},${local_lng}`,
        function (error, response, body) {
            if (error) throw error;
            //console.log(body);
            body = JSON.parse(body);
            let dayDate = new Date();
            wvm.temp = _.round(body.currently.temperature);
            wvm.icon = body.currently.icon;
            wvm.summary =  body.currently.summary;
            wvm.hourSummary = body.minutely.summary;
            wvm.daySummary = body.hourly.summary;
            wvm.weekSummary = body.daily.summary; 
            
            // get a set of daily info for the next week
                //console.log(body.daily.data[2].summary);
            for (var day=0; day < 7; day++){
                wvm.dailyWeather[day].summary   = body.daily.data[day].summary;
                wvm.dailyWeather[day].icon      = body.daily.data[day].icon;
                wvm.dailyWeather[day].lowTemp   = _.round(body.daily.data[day].temperatureMin);
                wvm.dailyWeather[day].highTemp  = _.round(body.daily.data[day].temperatureMax);
                dayDate.setTime(body.daily.data[day].time*1000);
                wvm.dailyWeather[day].dayName   = dayNames[dayDate.getDay()];
                
                daycons.set(`icon-${wvm.dailyWeather[day].dayName}`,wvm.dailyWeather[day].icon);                
            }

            
            // get the alerts, if any
            wvm.alerts = body.alerts;            
            
            // set the big icon at the top
            skycons.set("icon",body.currently.icon); 
            
            // make those canvases dance
                skycons.play();
                daycons.play();
            
        }    
    );
}

// Get the first data set
setWeatherData();

// kludge to maybe get the daycons to show up sooner
// it worked, but I have absolutely no idea why it's needed.
setWeatherData();

// update the weather every 5 minutes (1 while in dev)
setInterval(setWeatherData, 1*60*1000);