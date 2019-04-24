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
function writeSessionValues() {
      // Sets the text content of several span elements to variables 
      document.querySelector("#regName").textContent = sessionStorage.getItem("confName");
      document.querySelector("#regGroup").textContent = sessionStorage.getItem("confGroup");
      document.querySelector("#regEmail").textContent = sessionStorage.getItem("confMail");
      document.querySelector("#regPhone").textContent = sessionStorage.getItem("confPhone");
      document.querySelector("#regSession").textContent = sessionStorage.getItem("confSession");
      document.querySelector("#regBanquet").textContent = sessionStorage.getItem("confBanquet");
      document.querySelector("#regPack").textContent = sessionStorage.getItem("confPack");

      // Changes another span element 
      document.getElementById("regTotal").textContent = "$" + sessionStorage.getItem("confTotal");
}