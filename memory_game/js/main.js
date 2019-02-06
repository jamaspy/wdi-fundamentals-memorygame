var cards = ["queen", "king", "queen", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if(cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
	alert("You Found A Match!")
	}else{
	alert("Sorry, Try Again")
	}
}



console.log("User flipped over" + " " + cardOne);
console.log("User flipped over" + " " + cardTwo);
