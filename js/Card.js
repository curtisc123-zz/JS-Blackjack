/**
* Constructor
*/
var Card = function () {
    this.setSuit("Spades");
    this.setDescription("Ace");
};

/**
* Accessor for suit 
*/
Card.prototype.getSuit = function () {
    return this.suit;
};

/**
* Accessor for description
*/
Card.prototype.getDescription = function () {
    return this.description;
};

/**
* Set method for suit
*/
Card.prototype.setSuit = function (suit) {
    this.suit = suit;
};

/**
* Set method for description
*/
Card.prototype.setDescription = function (description) {
    this.description = description;
};

/**
* Create a card based on the values inputted
*/
Card.prototype.createCard = function (suit, description) {
    var i, j;

    for (i = 0; i < suits.length; i++) {
        if (suit.valueOf() === suits[i]) {
    	   this.setSuit(suit);
    	   break;
        }
    }

    for (j = 0; j < cards.length; j++) {
        if (description.valueOf() === cards[j]) {
    	   this.setDescription(description);
    	   break;
        }
    }
};