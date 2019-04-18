"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author: Connor J Webdale 
   Date: 4.18.19 
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

// Event listener for the window load event 
window.addEventListener("load", function () {
      // Calls the calCart() function 
      calcCart();

      // Creates an onlick event handler for the regSubmit button 
      document.getElementById("regSubmit").onclick = sessionTest;

      // onblur event handler for multiple input boxes 
      document.querySelectorAll("#fnBox", "#lnBox", "#groupBox", "#mailBox", "#phoneBox", "#banquetBox").onblur = calcCart;

      // onchange evet handler 
      document.getElementById("sessionBox").onchange = calcCart;

      // onclick event handler 
      document.getElementById("mediaCB").onclick = calcCart;
});

// Provides a validation test for the conference session selection list 
function sessionTest() {
      if (sessionBox.selectedIndex === -1) {
            document.getElementById("sessionBox").setCustomValidity("Select a Session Package");
      } else {
            document.getElementById("sessionBox").setCustomValidity("");
      }
}

// Calculate the registration cost and save information about the customer's choices in session storage 
function calcCart() {
      // Stores the value of the fist name and last name fields 
      var confName = document.getElementById("fnBox") + " " + document.getElementById("lnBox");

      // Stores the value of the group in a session storage variable 
      var confGroup = document.getElementById("groupBox");
}