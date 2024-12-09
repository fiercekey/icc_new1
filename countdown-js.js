// set the date we're counting down to

var target_date = new Date('Dec, 20, 2022').getTime();

 

// variables for time units

var days, hours, minutes, seconds;

 

// get tag element

var countdown = document.getElementById('countdown');

 

// update the tag with id "countdown" every 1 second

setInterval(function () {

 

    // find the amount of "seconds" between now and target

    var current_date = new Date().getTime();

    var seconds_left = (target_date - current_date) / 1000;

    
    //Time till EOD
    seconds_left = seconds_left;


    // do some time calculations

    days = parseInt(seconds_left / 86400);

    seconds_left = seconds_left % 86400;

     

    hours = parseInt(seconds_left / 3600);

    seconds_left = seconds_left % 3600;

     

    minutes = parseInt(seconds_left / 60);

    seconds = parseInt(seconds_left % 60);

     

    // format countdown string + set tag value

    countdown.innerHTML = '<span class="days">' +0+  ' <b>Days</b></span> <span class="hours">' + 0 + ' <b>Hours</b></span> <span class="minutes">'

    + 0 + ' <b>Minutes</b></span> <span class="seconds">' + 0 + ' <b>Seconds</b></span>';  

 

}, 1000);