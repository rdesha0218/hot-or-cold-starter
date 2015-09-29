$(document).ready(function() {
    $('button').click(function() {
        player();
        return false;
    });

    $(function() {
        $("form").submit(function() {
            player();
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
});

function play() {
    //Logic function that determines hot and cold
    function difference() {
        var hotnum = Math.abs(guess - randomnumber);
        return hotnum;
    }

    function hotter() {

        if (randomnumber == guess) {
            return "Your guess was right!";
        } else if (hotnum > 30 && choice < 50) {
            return "Guess is Ice Cold!";
        } else if (hotnum > 20 && hotnum < 30) {
            return "Warm";
        } else if (hotnum > 10 && hotnum < 20) {
            return "Hot";
        } else if (hotnum > 1 && hotnum < 10) {
            return "Very Hot";
        } else {
            return "Not even close"
        }
    }

    function player() {
            var guess = $('.text').val();
            $('ul#guessList').append('<li>' + guess + '</li>');
            return guess;
        }
        //Random number generator betweeen 1 and 100
    function randNum() {
        var randomnumber = Math.floor(Math.random() * 101);
        //var randomnumber = Math.floor(Math.random()*101);
        return randomnumber;
        console.log(randomnumber);
    }

    function level_four_diagnostic() {
        console.log("Guess is " + guess);
        console.log("Random is " + randomnumber);
        console.log("Hotnum is " + hotnum);
    }
    function newGame() {
        randNum();
        var guess = 0;
        var hotnum = 0;
        level_four_diagnostic();
    }

}