//console.log("User flipped" + cardFour + cardTwo);

const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [];

function checkforMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
		}
}


function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
		checkforMatch();
	}
}

flipCard(0);
flipCard(2);


