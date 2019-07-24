var cards = ["queen", "queen", "king", "king"]; // card array
var cardsInPlay = []; // empty array
function checkForMatch(){
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
function flipCard(cardId) {
console.log("User flipped " + cards[cardId]) // console showing card in play
checkForMatch();
};

flipCard(0);
flipCard(2);

// cardsInPlay.push(cards[cardID]); // not sure where this goes