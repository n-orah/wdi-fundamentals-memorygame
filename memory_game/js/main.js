var cards = [
    {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
    },
    {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
    },
    {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
    },
    {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
    }
    ];

var cardsInPlay = [];

var score = 0;


var checkForMatch = function() {

    if(cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
        score += 1;
        document.getElementById('score').innerHTML = "Score: <strong style=color:red;>" + score + "</strong>";

    }
        else {
            alert("Sorry, try again.");
        }
};

var flipCard = function() {
    var cardId = this.getAttribute('data-id');
    this.setAttribute('src',cards[cardId].cardImage);
    
    cardsInPlay.push(cards[cardId].rank);
    console.log("User flipped " + cards[cardId].rank);
    console.log("Card image is: " + cards[cardId].cardImage);
	console.log("Card Suit is: " + cards[cardId].suit);
    if (cardsInPlay.length === 2){
		checkForMatch();
	}	
};

var createBoard = function(){
	resetCard();
	
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);   
}
};

var resetCard = function(){
	cardsInPlay = [];
	document.getElementById('game-board').innerHTML = "";
    
    document.getElementById('reset').addEventListener('click',createBoard);
    console.log('Game Has Been Reset');
	
}

createBoard();