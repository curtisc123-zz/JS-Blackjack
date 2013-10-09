/**
* Constants
*/
var cards = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var DECK_SIZE = 52;
var TIMES_TO_SHUFFLE = 364;
var BLACKJACK = 21;
var STAND = 17;
var hitButton = document.getElementById("hit");
var standButton = document.getElementById("stand");

var formatString = function (str) {
    var firstLetter = str.substring(0, 1), remainingLetters = str.substring(1);
    return firstLetter + remainingLetters;
};
