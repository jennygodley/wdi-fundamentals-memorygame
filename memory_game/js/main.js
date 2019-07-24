var cards = ["queen", "queen", "king", "king"]; // card array
var cardsInPlay = []; // empty array
var cardOne = cards[0];
cardsInPlay.push(cardOne)
var cardTwo = cards[1]
cardsInPlay.push(cardTwo)
console.log("User flipped " + cardsInPlay) // console showing cards in play
if (cardsInPlay.length === 2) // needs a then

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
}
else if (cardsInPlay[0] !== cardsInPlay[1]) {
	alert("Sorry, try again.");
}