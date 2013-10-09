/**
* The Game of Blackjack
*/
var Blackjack = function () {
	this.player = new Player();
};

/**
* Appends the cards, to the UI
* @param card to be added
*/
Blackjack.prototype.appendCardsToUI = function ( card ) {
	var playerBoard = document.getElementById("player");
	var cardElement = document.createElement("div");
	cardElement.className = "card " + this.player.playerHand[card].description.toLowerCase() + " " + this.player.playerHand[card].suit.toLowerCase();
	cardElement.innerHTML = this.player.playerHand[card].description + " of " + this.player.playerHand[card].suit;
	playerBoard.appendChild(cardElement);
};

/**
* This will add a card to the hand
*/
Blackjack.prototype.addCardToHand = function () {
	this.player.playerHand.push(this.deck.dealCard());
};

/**
* Method that handles the current hand
*/
Blackjack.prototype.createNewHand = function () {
	this.addCardToHand();
	this.addCardToHand();
	this.appendCardsToUI(0);
	this.appendCardsToUI(1);
};

/**
* Hit
*/
Blackjack.prototype.hit = function () {
	console.log("HIT");
	this.addCardToHand();
	this.appendCardsToUI(this.player.playerHand.length - 1);
	this.calculateScore();
};

/**
* Stand
* @return boolean
*/
Blackjack.prototype.isStanding = function () {
	console.log("STAND");
	this.clearCurrentHand();
	this.calculateScore();
	return true;
};

/**
* Clear the current hand
*/
Blackjack.prototype.clearCurrentHand = function () {
	this.player.playerHand = [];
	document.getElementById("player").innerHTML = "";
};

/**
* Check if blackjack
* @param score
*/
Blackjack.prototype.isBlackjack = function ( score ) {
	if ( score === BLACKJACK ) {
		return true;
	}
	return false;
};

/**
* Check if busted
* @param score
*/
Blackjack.prototype.isBusted = function ( score ) {
	if ( score > BLACKJACK ) {
		return true;
	}
	return false;
};

/**
* Calculate the score
* @return score
*/
Blackjack.prototype.calculateScore = function () {
	var i, j, k, cardDescription, aces;
	var score = 0;

	// Loop through the cards in the players hand
	for (i = 0; i < this.player.playerHand.length; i++) {
		cardDescription = this.player.playerHand[i].description;

		// Loop through the cards array, and assign the value for each card based on the index 
		for(j = 0; j < cards.length; j++) {
			// Check for Face Cards
			if (cardDescription === cards[j] && j >= 10 && j !== 0) {
				score += 10;
			}

			// Normal values for cards
			if (cardDescription === cards[j] && j < 10 && j !== 0) {
				score = score + j + 1;
			}

			// Aces are equal eleven
			if (cardDescription === cards[j] && j === 0) {
				score += 11;
			}
		}
	}

	// Loop through hand again and check for aces, make aces equal one if the score is over blackjack
	// Check for a cleaner way to do this
	for (k = 0; k < this.player.playerHand.length; k++) {
		cardDescription = this.player.playerHand[k].description;

		if (cardDescription === cards[0] && score > BLACKJACK) {
			score -= 10;
		}
	} 

	document.getElementById("score").innerHTML = score;
	return score;
};

Blackjack.prototype.play = function () {
	this.deck = new Deck();
	var hitButton = document.getElementById("hit");
	var standButton = document.getElementById("stand");

	this.deck.createDeck();
	this.deck.shuffleDeck();
	this.createNewHand();
};