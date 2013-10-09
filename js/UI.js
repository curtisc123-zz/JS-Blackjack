/**
* The User Interface
*/

var UserInterface = function () {
	var that = this;
	var hitButton = document.getElementById("hit");
	var standButton = document.getElementById("stand");

	this.game = new Blackjack();

	hitButton.addEventListener("click", hitClicked, false);
	standButton.addEventListener("click", standClicked, false);
	
	function hitClicked() {
		that.game.hit();
	}

	function standClicked() {
		that.game.isStanding();
	}
}