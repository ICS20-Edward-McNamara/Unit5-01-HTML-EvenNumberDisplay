// Copyright (c) 2022 Edward McNamara All rights reserved
//
// Created by: Edward McNamara 
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all numbers from the users minimum to the users maximum
 */
function displayNumbers() {
  // initialize the counter to 0
	let counter = 0
	// initalize numbers as an empty string
	let numbers = ""
	
	// get the user number
	let userMax = parseInt(document.getElementById('userMax').value)
  let userMin = parseInt(document.getElementById('userMin').value)
  
  // setting the counter equal to the users minimum
  counter = userMin
  
	// use a while loop to display the numbers between the users minimum and maximum
	while (counter <= userMax) {
		// build the string of numbers with a line break each time
		numbers = numbers + counter + "<br>"
		// increment the counter
		counter = counter +1
	}
	if (userMin > userMax) {
    numbers = "Your minimum can not be greater than your maximum"
  }
  	// return the string of numbers back to html
  	document.getElementById('display-results').innerHTML = numbers
}
