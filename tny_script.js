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
setInterval("runClock()", 1000);

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

//create a function to solve for the area of the rectangle using random sizes

function solver(){

   var height = Math.ceil(Math.random()*10);
   var length = Math.ceil(Math.random()*10);

   var area = (Math.ceil(height * length));

   //use concat. to tell the user the size of the ret and then the 
   //area created by it
   console.log ("The height is " + height + " and the length is " + length + ", therefore the area of the rectangle is " + area);
}

setInterval("solver()", 1000);