// clock.js scripts to stuff hours and days into the display element
// using vue.js

'use strict';

var Vue = require('vue');
var tvm = new Vue({
    el: '.clock',
    data: {
        hours: "00",
        mins:  "00",
        secs:   "00",
        month: "00",
        day: '00',
        date: "00",
    }
})

function addZero(s) {
    return ( (s < 10) ? "0" : "") + s;
}

function setTimeData () {
    const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
    const dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    var date = new Date;
    
    tvm.hours = addZero(date.getHours());
    tvm.mins = addZero(date.getMinutes());
    tvm.secs = addZero(date.getSeconds());
    tvm.month = monthNames[date.getMonth()];
    tvm.day = dayNames[date.getDay()];
    tvm.date = date.getDate();    
}

setInterval( setTimeData, 1000);

