"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Joel Mendivil
   Date: 1/6/19  

*/


//Display the current date and time
document.getElementById("dateNow").innerHTML="mm/dd/yyyy <br/> hh:mm:ss";

//Display the time left until New Year's Eve
document.getElementById("days").textContent = "DD";
document.getElementById("hrs").textContent = "HH";
document.getElementById("mins").textContent = "MM";
document.getElementById("secs").textContent = "SS";

var date = new Date("January 7, 2020 13:54:23");

var dateStr = date.toDateString();       // dateStr == 1/7/2020
var timeStr = date.toLocaleTimeString(); // timeStr == 1:54:23 PM

document.getElementById("dateNow").innerHTML = dateStr + "<br/>" + timeStr;

var daysLeft = 365 - date.getDate();
var hrsLeft = 24 - date.getHours();
var minsLeft = 60 - date.getMinutes();
var secsLeft = 60 - date.getSeconds();

document.getElementById("days").textContent = daysLeft;
document.getElementById("hrs").textContent = hrsLeft;
document.getElementById("mins").textContent = minsLeft;
document.getElementById("secs").textContent = secsLeft;
