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
document.addEventListener("load", writeSessionValues);

// Displays the values of the session storage variables in the current web page
function writeSessionValues() {
      // Sets the text content of several span elements to variables 
      document.querySelectorAll("regName").textContent = confName;
      document.querySelectorAll("regGroup").textContent = confGroup;
      document.querySelectorAll("regEmail").textContent = confMail;
      document.querySelectorAll("regPhone").textContent = confPhone;
      document.querySelectorAll("regSession").textContent = confSession;
      document.querySelectorAll("regBanquet").textContent = confBanquet;
      document.querySelectorAll("regPack").textContent = contPack;

      // Changes another span element 
      document.getElementById("regTotal").textContent = "$" + confTotal.value;
}