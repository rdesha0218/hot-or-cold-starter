
$(document).ready(function() {
	var guess;
  var hotnum;
  var randomnumber;
  var counter = 0;

newGame();


    $('button').click(function() {
        player();
        console.log("test player");
           //difference();
           console.log("test difference");
            hotter();
            console.log("test hotter");
             counter++;
            $('#count').text(counter);
            return false;
    });

    $(function() {
        $("form").submit(function() {
            player();
        	console.log("test player");
          // difference();
           console.log("test difference");
            hotter();
            console.log("test hotter");
             counter++;
            $('#count').text(counter);
            return false;
        });
    });

    /// Display information modal box 
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    //--- Hide information modal box
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });
    $('a.new').click(function (){
    	location.reload();
    });
});

    //Logic function that determines hot and cold
    /*
    function difference() {
        hotnum = Math.abs(guess - randomnumber);
        return hotnum;
    }
*/

    function hotter() {
    	hotnum = Math.abs(guess - randomnumber);
        if (randomnumber == guess) {
            $('#feedback').text("Your guess was right!");
            return false;
        } else if (hotnum > 30 && hotnum < 50) {
            $('#feedback').text("Guess is Ice Cold!");
        } else if (hotnum > 20 && hotnum < 30) {
            $('#feedback').text("Warm");
        } else if (hotnum > 10 && hotnum < 20) {
            $('#feedback').text("Hot");
        } else if (hotnum > 0 && hotnum < 10) {
            $('#feedback').text("Very Hot");
        } else {
            $('#feedback').text("Not even close");
        }
    }

    function player() {
            guess = $('.text').val();
            $('ul#guessList').append('<li>' + guess + '</li>');
            return guess;

        }
        //Random number generator betweeen 1 and 100
    function randNum() {
        randomnumber = Math.floor(Math.random() * 101);
    }

    function newGame() {
    	randNum();
    }

    function test() {
        console.log("Guess is " + guess);
        console.log("Random is " + randomnumber);
        console.log("Hotnum is " + hotnum);
        console.log("COunter is " + counter);
    }
