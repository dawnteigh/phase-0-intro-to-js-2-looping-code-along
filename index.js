const cards = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
let thanks = [];
function writeCards(cards, event) {
  for (let i = 0; i < cards.length; i++) {
    thanks.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
  }
  return thanks;
}

function countDown() {
let countUp = 10;
while (countUp >= 0) {
console.log(countUp--);
}
}