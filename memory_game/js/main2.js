var cards = [  // card array
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		} else {
		alert("Sorry, try again.");
	}
}

function flipCard() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	console.log("User flipped " + cards[cardId].rank); // console showing card in play
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.querySelector('div').appendChild(cardElement);
	}
}

// made the button in html instead:
// var button = document.createElement("button");button.innerHTML = "Reset";
// var body = document.getElementsByTagName("div")[1];body.appendChild(button);
// button.addEventListener ("click", resetButton);

function resetButton() {
		var newBoard = document.querySelector('div');
		newBoard.innerHTML = " ";
		cardsInPlay.length = 0;
		createBoard();
	
}

createBoard();