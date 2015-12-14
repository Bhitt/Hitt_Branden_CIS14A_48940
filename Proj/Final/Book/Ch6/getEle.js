// JavaScript Document
/*
Let’s say we want to change the greenplanet’s text from “All is well” to “Red Alert: hit by phaser fire!” Down the road you might want to do something like this based on a user’s actions, or even based on data from a web service.
*/

//we're assigning the element object to a variable named planet. document.getElementById seeks out the "greenplanet" element (a paragraph) by id
var planet = document.getElementById("greenplanet");
planet.innerHTML = "Red Alert: hit by phaser fire!";
//now we can refer to our element as the variable planet. we can use the innerHTML property of our planet element to change the content of the element
//The DOM and the page are now updated

/*
	--- When you grab an element from the DOM using getElementById, what you get is an element object, which you can use to read, change or replace the element’s content and 		
		attributes.
*/