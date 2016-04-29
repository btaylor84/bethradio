'use strict;'

window.$ = window.jQuery = require('./jquery-2.2.3.js');
var _ = require('lodash');
var intIdup; // used as the timer identifier for various touch events
var intIddn; // seperate timer to allow conflicting touches to work

function startup() {
    // the middle button, pause-play, is a toggle to mute/stop the stream
    var el = document.getElementById("pause-play");
    el.addEventListener("click", pauseHandleStart, false)
    el.addEventListener("touchstart", pauseHandleStart, false);
    el.addEventListener("touchend", pauseHandleEnd, false);
    
    // the volume up button. click should increase volume by a discrete amount
    // keeping your finger on the button should sequentially increase volume
    // we should have a visual indicator when the volume is pressed
    el = document.getElementById("volup");
    el.addEventListener("click", volupHandleClick, false);
    el.addEventListener("touchstart", volupHandleStart, false);
    el.addEventListener("touchend", volupHandleEnd, false);

    // same as above, but for volume down    
    el = document.getElementById("voldn");
    el.addEventListener("click", voldnHandleClick, false);
    el.addEventListener("touchstart", voldnHandleStart, false);
    el.addEventListener("touchend", voldnHandleEnd, false);
    
    // if they click the clock, don't go away from app
    el = document.getElementsByClassName("clock")[0];
    el.addEventListener("click",(evt) => evt.preventDefault() , false);
    
    // get the metadata, every time it gets loaded
    //el = document.getElementById("player");
    //el.addEventListener("loadedmetadata", streamData, false);
}

function pauseHandleStart (evt) {
    let player = document.getElementById("player");
    evt.preventDefault();
    if ( $("#pause-play").hasClass("fa-pause-circle") ) {
        $("#pause-play").toggleClass("fa-pause-circle fa-play-circle");
        player.pause();
    } else {
        $("#pause-play").toggleClass("fa-play-circle fa-pause-circle");
        player.play();
    }  
}

function pauseHandleEnd (evt) {
    evt.preventDefault();
    
}

function volupHandleClick (evt) {
    let player = document.getElementById("player");
    evt.preventDefault();
    // player.volume = _.min([1.0, player.volume * 1.1]);    
    player.volume = _.min([1.0, player.volume + 0.1]);    
}

function volupHandleStart (evt) {
    // while the volup is pressed, click up the volume every xxx msec
    // since that's maxed at 1, shouldnt over-do. 
    intIdup = setInterval(volupHandleClick(evt), 400);
    $("#volup").addClass("pressed");    
}

function volupHandleEnd (evt) {
    // all done
    clearInterval(intIdup);
    $("#volup").removeClass("pressed")
    
}

function voldnHandleClick (evt) {
    let player = document.getElementById("player");
    evt.preventDefault();
    //player.volume = _.max([0.0, player.volume * .9]);
    player.volume = _.max([0.0, player.volume - 0.1]);
   
}

function voldnHandleStart (evt) {
    intIddn = setInterval(voldnHandleClick(evt), 400);
    $("#voldn").addClass("pressed");    
}

function voldnHandleEnd (evt) {
    clearInterval(intIddn);
    $("#voldn").removeClass("pressed");    
}

// let's see what this shows. we're hoping ... program title, etc.
function streamData (evt) {
    console.log(evt);
}
