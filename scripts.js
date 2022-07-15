let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
player = {
    name: "mohammadreza",
    chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function randomCard() {
    let random = Math.floor(Math.random() * 13) + 1;
    if (random > 10) {
        return 10;
    } else if (random === 1) {
        return 11;
    }
    return random;
}

function startGame() {
    isAlive = true;
    let firstCard = randomCard();
    let secondCard = randomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "wohoo! you have got a blackjack!!!!";
        hasBlackjack = true;
    } else {
        message = "You are out of the game!!";
        isAlive = false;
    }
    messageEl.textContent = message;
    cardsEl.textContent = "Card: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let thirdCard = randomCard();
        cards.push(thirdCard);
        sum += thirdCard;
        renderGame();
    }
}