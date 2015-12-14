//BUG: Entering the same number that is a hit on a ship results in sinking the ship, when it shouldn’t.

var randomLoc = Math.floor(Math.random() * 5);
//Math.random gets random number from 0 to 1
//Multiply by 5 to get number within the range of the Battleship game (positions 1-4 are the only places the first cell of the ship can go
//Math.floor rounds the number down the nearest integer

//Take the random location along with the next two consecutive locations.
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false; 
//Here’s the start of the loop. While the ship isn't sunk, we're still in the game, so keep looping
while (isSunk == false) {
//Here we're assigning the result of the prompt function to the guess variable.
	guess = prompt("Ready, aim, fire! (enter a number 0-6):");
	if (guess < 0 || guess > 6) {
		alert("Please enter a valid cell number!");
	} else {
//if the guess is valid, go ahead and add one to guesses so we can keep track of how many times the user has guessed
		guesses = guesses + 1;

		if (guess == location1 || guess == location2 || guess == location3) {
			alert("HIT!");
			hits = hits + 1;
//If the guess matches one of the ship’s locations we increment the hits counter

//Take another look at the while loop above. What happens when isSunk is true?
		if (hits == 3) {
			isSunk = true;
			alert("You sank my battleship!");
		  }
		} else {
				alert("MISS");
      }
   }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " +
"which means your shooting accuracy was " + (3/guesses);
alert(stats);