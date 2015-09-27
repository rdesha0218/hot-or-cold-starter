//Use original html and css
//When page loads new game should start
//When new game starts, secret 1 - 100 num should be generated
//User should get feedback about each guess
//Hotter colder 50 > away ice cold, between 30 to 50 cold, 
//	between 20 and 30 warm between 10 and 20 hot. 1 - 10 very hot
//Feedback should appear in div#feedback, page loads sets this to Make Your Guess
//SHould track how many guesses the user had made, appear in span#count,
//	defaults to 0 when page loads
//SHould supply users with numbers they've guessed so far
//	added as an <li> to ul#guessList
//New game button should trigger new game function

var randomnumber, randNum, hotnum, guess = '';

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});
/*
function game(guess) {
		
}
*/
	//Logic function that determines hot and cold


	function hotter(choice) {
		var guess = choice;
		return guess;

		hotnum = Math.abs(guess - randomnumber);

			if (randomnumber== guess) {
				return "Your guess was right!";
				level_four_diagnostic();
			}
			else if	(hotnum > 30 && hotnum < 50) {
				return "Guess is Ice Cold!";
				level_four_diagnostic();
			}
			else if (hotnum  > 20 && hotnum < 30) {
				return "Warm";
				level_four_diagnostic();
			}
			else if (hotnum > 10 && hotnum < 20) {
				level_four_diagnostic();
				return "Hot";
			}
			else if (hotnum > 1 && hotnum < 10) {
				level_four_diagnostic();
				return "Very Hot";
			}

			else {
				return "Not even close"
				level_four_diagnostic();
			}
	}

//Resets game data and starts new game
function newGame() {
	randNum();
	guess = '';
	hotnum = '';
}

//Random number generator betweeen 1 and 100
function randNum() {
	randomnumber = Math.floor(Math.random()*101);
	//var randomnumber = Math.floor(Math.random()*101);
	return randomnumber;
	console.log(randomnumber);
}

function level_four_diagnostic() {
	console.log("Guess is" + guess);
	console.log("Random is " + randomnumber);
	console.log("Hotnum is " + hotnum);
}