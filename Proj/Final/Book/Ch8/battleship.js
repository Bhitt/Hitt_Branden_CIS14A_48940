// JavaScript Document
var model = {
	boardSize: 7, //not hard coded, so we can change the size of the board easily for harder versions of the game
	numShips: 3, //by not hard coding the number of ships, it is easy to change how many ships are in a game
	shipLength: 3, //not hard coded, so we can change the length of the ships easily for harder versions of the game
	shipsSunk: 0, //keeps track of number of ships the user has sunk, initialized to zero
	ships: [{ locations: [0, 0, 0], hits: ["", "", ""] },
			{ locations: [0, 0, 0], hits: ["", "", ""] },
			{ locations: [0, 0, 0], hits: ["", "", ""] }
			],
//ships: array of ship objects that each store the locations and hits of one of the three ships
//hits: an array that holds whether or not a ship is hit at each location. We'll set the array items to the empty string initially, and change each item to “hit" when the ship has taken a hit in the corresponding location. we've converted the ship locations to two numbers, using 0 for A, 1 for B, and so on.

//the fire method: part of the game logic the view object will display the hits and misses, so the fire method will provide the game logic for determining whether a hit or a miss has occurred. If no ship occupies the guessed location, you’ve got a miss. We’ll let the view know, and return false from the method.
	fire: function(guess) {
		for (var i = 0; i < this.numShips; i++) {//iterates through the array of ships
			var ship = this.ships[i];
		
/*
			locations = ship.locations; //accesses the ship's set of locations (property of the ship that contains an array)
			var index = locations.indexOf(guess);
			
			--- we could write these two lines above, but it's better to shorten them into one line using chaining
			--- chaining allows us to string together object references to that we don't have to use temporary variables, like locations above
			--- locations is a temporary variable because we're using locations only to temporarily store the ship.locations array so we can call the indexOf
			    method on it to get the index of the guess
			--- to chain, we write instead:
*/
			var index = ship.locations.indexOf(guess);
		 
//we could write a loop to go to through each item in the locations array, compare the item to guess, and evaluate whether or not the guess is a hit. instead, we'll use the indexOf method, which will return the index of a guess if it is a hit, and -1 if the guess is not the location of a hit
			if (index >= 0) {
				ship.hits[index] = "hit"; //marks the hits array at the same index
				view.displayHit(guess);
				view.displayMessage("HIT!");
				if (this.isSunk(ship)) {//this is a check to see if the ship is sunk.
					view.displayMessage("You sank my battleship!");
					this.shipsSunk++; //if the ship is sunk, we increase the number of shipsSunk
				}
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage("You missed.");
		return false; //if we iterate through all the ships and don't have a hit, it's a miss and false is returned
	},
	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i++) {//iterates through each ship and checks every possible location for a hit
			if (ship.hits[i] !== "hit") {//If there's a location that doesn't have a hit, then the ship is still floating, so return false
				return false;
			}
		}
		return true; //if all three locations of a ship are hit, the ship is sunk
	},
	generateShipLocations: function() {
		var locations;
		for (var i = 0; i < this.numShips; i++) {//"for each ship we want to generate locations for"
			do {
				locations = this.generateShip();//checks to see if the location of a ship overlaps with any cell of another ship. keeps generating new locations until there are no overlaps
			} while (this.collision(locations));
			this.ships[i].locations = locations; //once we have locations that work, we assign the locations to the ship's location property in the model ships array
		}
	},
	generateShip: function() {
		var direction = Math.floor(Math.random() * 2); //We use Math.random to generate a number between 0 and 1, and multiply the result by 2, to get a number between 0 and 2(not including 2). We then turn that into a 0 or a 1 using Math.floor.
		var row, col;
		if (direction === 1) {//if the direction is a 1, a horizontal ship is made
			row = Math.floor(Math.random() * this.boardSize);// Generate a starting location for a horizontal ship  //row and col generate the random cell where the ship will start. because this is a horizontal ship, it can start in any row but cannot start after the fourth column because the ship's length is 3
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength)); //we use this.shipLength instead of the number 3 to make sure the horizontal ship fits on the board, so that we can change the ship's length without having to rewrite this part of the code
		} else {//if direction is a 0, a vertical ship is made
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength)); //same concept as horizontal ship
			col = Math.floor(Math.random() * this.boardSize);
		}
    var newShipLocations = []; //for the new ship locations, we start with an empty array and add the values one by one
    for (var i = 0; i < this.shipLength; i++) {//loop for the number of ships in the game
    	if (direction === 1) { //code for a horizontal ship
    		newShipLocations.push(row + "" + (col + i)); //pushes a new location into the array that contains the new ships. that location is a string starting in the 1st position generated above. we use parentheses to ensure that i is added to column before it's converted to a string. the first time through the loop, i is 0. the second time, it's the next column over, and so on until we reach the length of the ship. we'll get something like 01, 02, 03 in the array.
		} else {
			newShipLocations.push((row + i) + "" + col); //same concept as horizontal ship above. remember, concatenation is not addition, so we get a string
		}
	}
    return newShipLocations; //once we have the locations of all the ships in the game, we return the array
    },
    collision: function(locations) { //uses two nested for loops. the outer loop iterates through all the ships in the model, and the inner loop iterates through all the new ship's location is already taken by an existing ship on the board
    	for (var i = 0; i < this.numShips; i++) { //"for each ship already on the board"
    		var ship = model.ships[i];
    		for (var j = 0; j < locations.length; j++) {//check to see if any of the locations in the new ship's locations array are in an existing ship's location array
    			if (ship.locations.indexOf(locations[j]) >= 0) { //uses indexOf to check if the location already exists in a ship. if the index is greater than or equal to zero, true is returned because it matched an existing location
    				return true; //returning from an inside a loop that's inside another loop stops the iteration of both loops, exiting the function and returning true
    			}
    		}
    	}
    	return false; //if false is returned, no collision has happened
    }
};

var view = {
	displayMessage: function(msg) { //displayMessage method: takes one argument, msg, gets the messageArea element from the page, and updates the text of the messageArea 												element by setting its innerHTML to msg
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},
	displayHit: function(location) {
		var cell = document.getElementById(location); //gets a reference to a cell of the table 
		cell.setAttribute("class", "hit"); //sets the class of that element to hit --> will immediately add a ship image to the cell
	},
	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}
};
var controller = {
	guesses: 0, //defines controller object with a property, guesses, initialized to zero
	processGuess: function(guess) {
		var location = parseGuess(guess); //validates the player's guess 
		if (location) { //as long as we don’t get null back, we know we’ve got a valid location object
			this.guesses++; //if the user enters a valid guess, guesses is incremented by one
			var hit = model.fire(location); //passes the row and column in the form of the string to the model's fire method, which returns true if a ship is hit
			if (hit && model.shipsSunk === model.numShips) {
				view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses"); //if the guess was a hit, and the number of ships sunk is equal to the number of ships in the game, a message is displayed that all the ships are sunk. guesses is a property of "this" object, the controller
			}
		}
	}
};
function parseGuess(guess) {//player's guess is passed into the guess parameter
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"]; //an array of valid possible first characters
	if (guess === null || guess.length !== 2) {//checks for null, and that the guess is 2 characters long
		alert("Oops, please enter a letter and a number on the board."); //if either of the above conditions is true (guess is null or the length of the guess is more or less than two characters, an alert is displayed that tells the use to enter a valid guess
	} else {
		var firstChar = guess.charAt(0); //gets the first character of the guess with the charAt method
		var row = alphabet.indexOf(firstChar); //using indexOf method, we get back a number between 0 and 6 that corresponds to the letter
		var column = guess.charAt(1); //grabs the second character of the string, which represents the column
		if (isNaN(row) || isNaN(column)) {//uses the NaN function to see if the row or column is not a number
			alert("Oops, that isn't on the board.");
		} else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) { //checks that values given for the row and column are between 0 and the width/length of the board. relies on type conversion because column is a string
			alert("Oops, that's off the board!");
		} else {
			return row + column; //concatenates the row and column to return a string
		}
	} 
	return null; //returns null when the guess has failed one of the tests above
};
/*
event handlers
	* in this game, event handlers allow a user's guesses to be entered and retrieved so the game can actually be played
*/
window.onload = init; //we want the init function to run when the page is fully loaded
function init() {
	var fireButton = document.getElementById("fireButton"); //gets reference to the fire button using the getElementById method
	fireButton.onclick = handleFireButton; //click handler function named handleFireButton
	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress; //when a user presses the enter key, the handleKeyPress function will be called
	model.generateShipLocations(); //generates ships locations and fills the empty arrays in the model
};
function handleFireButton() {//will bel called whenever the fire button is clicked
	var guessInput = document.getElementById("guessInput"); //gets a reference to the user input from the form
	var guess = guessInput.value; //the user's guess is stored in the value method of guessInpuut, which is set to the variable guess
	controller.processGuess(guess); //passes guess to the controller, where the game logic is executed
	guessInput.value = ""; //resets the fire button to the empty string, so the user doesn't have to delete their last guess manually
};
//handleKeyPress is called whenever a button on the keyboard is pressed. the browser passes an event object, which has info about which key was pressed, to the handler
function handleKeyPress(e) {
	var fireButton = document.getElementById("fireButton");
	if (e.keyCode === 13) {//when enter key is pressed, the event's keyCode property will be set to 13. If that's the case, then we want to cause the Fire! button to act like it was clicked. We can do that by calling the fireButton's click method (basically tricking it into thinking it was clicked).
		fireButton.click();
		return false; //we return false so the form doesn't try to do anything else, like resubmit itself
	}
};
/*
how to place ships:
	*ships must be able to be placed on the board either vertically or horizontally, and ships cannot overlap
*/
