"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Joel Mendivil
   Date: 1/6/19  

*/
runClock();

function runClock(){

   //Display the current date and time
   var currentYear = new Date();

   //changed today's date
   var dateStr = currentYear.toDateString();
   var timeStr = currentYear.toLocaleTimeString();

   document.getElementById("dateNow").innerHTML = dateStr + "</br>" + timeStr;

   //Display the time left until New Year's Eve
   var newYear = new Date("January 1, 2021");
   var nextYear = currentYear.getFullYear()+1;
   newYear.setFullYear(nextYear);

   var daysLeft = (newYear - currentYear)/(1000*60*60*24);
   var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
   var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.ceil(secsLeft);
}

function distance(x1, y1, x2, y2){
   var distance = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
   return distance;
}

console.log(distance(1,1,4,5));