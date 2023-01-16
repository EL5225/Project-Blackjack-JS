let player = {
    nama: "Dejan",
    chips: 200
}
let cards = [];

let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let warning = "";
let showPlayer = player.nama + " : $" + player.chips;

let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
let warnEl = document.getElementById("warning-el");
let playerEl = document.getElementById("player-el");
let startBtn = document.getElementById("start-btn");
let newBtn = document.getElementById("new-btn");

playerEl.textContent = showPlayer;

function renderGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    
    if (cards.length === 0) {
        cards.push(firstCard, secondCard);
        sum = firstCard + secondCard;
    }

    cardEl.textContent = "Kartu : ";

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Jumlah : " + sum;

    if (sum <= 20) {
        message = "Kamu mau Draw Kartu?"
    } else if (sum === 21) {
        message = "Kamu dapat Blackjack!"
        hasBlackjack = true;
    } else {
        message = "Kamu keluar dari permainan!"
        isAlive = false;
    }

    messageEl.textContent = message;
}



startBtn.addEventListener( "click", function () {
    renderGame();
})



newBtn.addEventListener( "click", function () {

    if (cards.length !== 0) {
        if (isAlive === false || hasBlackjack === true) {
            warning = "Kamu sudah tidak bisa Draw Kartu lagi!"
            warnEl.textContent = warning;
        } else {
            let card = getRandomCard();
            sum += card;
            cards.push(card);  
        }
        renderGame();
    }
})



function getRandomCard() {

    let randomCards = Math.floor(Math.random() * 13) + 1;
    if (randomCards === 1) {
        return 11;
    } else if (randomCards > 10) {
        return 10;
    } else {
        return randomCards;
    }
    
}