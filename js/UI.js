/**
* The User Interface
*/

var UserInterface = function () {
	this.game = new Blackjack();
	var that = this;
	var dealButton = document.getElementById("deal");
	var hitButton = document.getElementById("hit");
	var standButton = document.getElementById("stand");
	var scoreUI = document.getElementById("score");

	dealButton.addEventListener("click", dealClicked, false);
	hitButton.addEventListener("click", hitClicked, false);
	standButton.addEventListener("click", standClicked, false);

	function dealClicked () {
		document.getElementById("score").innerHTML = "";

		// Show the game controls
		hitButton.style.display = "inline-block";
		standButton.style.display = "inline-block";

		if (that.game.deck.deck.length < 13) {
			that.game.deck.createDeck();
			that.game.deck.shuffleDeck();
		}

		that.game.createNewHand();

		createUICard(0);
		createUICard(1);

		// Check the score
		if (that.game.isBlackjack( that.game.calculateScore() )) {
			document.getElementById("message").innerHTML = "Blackjack! Winner!";
			hitButton.style.display = "none";
			standButton.style.display = "none";
		}
	};

	function hitClicked () {
		that.game.hit();
		createUICard(that.game.player.playerHand.length - 1)

		if (that.game.isBlackjack( that.game.calculateScore() )) {
			document.getElementById("message").innerHTML = "Blackjack! Winner!";
			hitButton.style.display = "none";
			standButton.style.display = "none";
		}

		if (that.game.isBusted( that.game.calculateScore() )) {
			document.getElementById("message").innerHTML = "Busted! Loser!";
			console.log("You Lose.");
			hitButton.style.display = "none";
			standButton.style.display = "none";
		}
	};

	function standClicked () {
		document.getElementById("message").innerHTML = "You chose to stand.";
		that.game.isStanding();
		hitButton.style.display = "none";
		standButton.style.display = "none";
	};

	function createUICard (card) {
		var cardElement = document.createElement("div");
		var playerArea = document.getElementById("player");

		cardElement.className = "card " + that.game.player.playerHand[card].description.toLowerCase() + " " + that.game.player.playerHand[card].suit.toLowerCase();
		cardElement.innerHTML = that.game.player.playerHand[card].description + " of " + that.game.player.playerHand[card].suit;
		playerArea.appendChild(cardElement);
	};
}