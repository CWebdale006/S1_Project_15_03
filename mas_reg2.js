"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_reg2.js

   Author: Connor J Webdale 
   Date: 4.18.19 


   Function List
   =============
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/
// Event listener to run the writeSessionValues on load 
window.addEventListener("load", writeSessionValues);

// Displays the values of the session storage variables in the current web page
function writeSessionValues(confName, confGroup, confMail, confPhone, confSession, confBanquet, confPack, confTotal) {
      // Sets the text content of several span elements to variables 
      document.querySelector("#regName").textContent = confName;
      document.querySelector("#regGroup").textContent = confGroup;
      document.querySelector("#regEmail").textContent = confMail;
      document.querySelector("#regPhone").textContent = confPhone;
      document.querySelector("#regSession").textContent = confSession;
      document.querySelector("#regBanquet").textContent = confBanquet;
      document.querySelector("#regPack").textContent = confPack;

      // Changes another span element 
      document.getElementById("regTotal").textContent = "$" + confTotal;
}