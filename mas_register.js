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
      document.querySelector("#fnBox").onblur = calcCart;
      document.querySelector("#lnBox").onblur = calcCart;
      document.querySelector("#groupBox").onblur = calcCart;
      document.querySelector("#mailBox").onblur = calcCart;
      document.querySelector("#phoneBox").onblur = calcCart;
      document.querySelector("#banquetBox").onblur = calcCart;

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
      var confName = document.getElementById("fnBox").value + " " + document.getElementById("lnBox").value;

      // Stores the value of the group in a session storage variable 
      var confGroup = document.getElementById("groupBox").value;

      // Stores the value of the email field in a session storage variable 
      var confMail = document.getElementById("mailBox").value;

      // Stores the value of the phoneNumber field in a session storage variable 
      var confPhone = document.getElementById("phoneBox").value;

      // Stores the value of the banquetGuests field in a session storage variable 
      var confBanquet = document.getElementById("banquetBox").value;

      // Multiplies the value of banquetGuests field by 55 
      var confBanquetCost = confBanquet * 55;

      // If the selected index of the sessionBox selection list isn't equal to -1 
      if (sessionBox.selectedIndex != -1) {
            // Stores the text of the selected option 
            var confSession = sessionBox[sessionBox.selectedIndex].text;

            // Stores the value of the selected option 
            var confSessionCost = sessionBox[sessionBox.selectedIndex].value;
      } else {
            // Sets them to an empty text string and a value of 0 
            var confSession = "";
            var confSessionCost = 0;
      }

      // Sees if the user has selected the "Media Pack" option 
      if (document.getElementById("mediaCB").checked === true) {
            // Stores the selections in variables 
            var confPack = "yes";
            var confPackCost = 115;
      } else {
            var confPack = "no";
            var confPackCost = 0;
      }

      // Calculates the total registration cost 
      var confTotal = parseFloat(confSessionCost) + parseFloat(confBanquetCost) + parseFloat(confPackCost);

      // Calls the "writeSessionValues" function 
      writeSessionValues(confName, confGroup, confMail, confPhone, confSession, confBanquet, confPack, confTotal);
}

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