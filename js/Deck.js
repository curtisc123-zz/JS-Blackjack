/**
* Constructor
*/
var Deck = function () {
    this.deck = [];
};

/**
* Create a single card and add it 
*/
Deck.prototype.addCard = function (suit, description) {
    var card = new Card();
    card.createCard(suit, description);
    this.deck.push(card);
};

/**
* Create the deck
*/
Deck.prototype.createDeck = function () {
    var i, j;

    for (i = 0; i < suits.length; i++) {
        for (j = 0; j < cards.length; j++) {
    	   this.addCard(suits[i], cards[j]);
        }
    }
};

/**
* Shuffle the deck
*/
Deck.prototype.shuffleDeck = function () {
    var i, firstCard, secondCard, cardA;

    for (i = 0; i < TIMES_TO_SHUFFLE; i++) {
        firstCard = Math.floor((Math.random() * 52));
        secondCard = Math.floor((Math.random() * 52));

        cardA = this.deck[firstCard];
        this.deck[firstCard] = this.deck[secondCard];
        this.deck[secondCard] = cardA; 
    }
};

/**
* Deal a Card
*/ 
Deck.prototype.dealCard = function () {
    var dealtCard = this.deck.pop();
    return dealtCard;
};