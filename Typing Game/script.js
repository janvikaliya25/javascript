
const words = [
  "mango","apple","banana","cherry","orange","pineapple","grapes",
  "watermelon","strawberry","papaya","blueberry","kiwi","pomegranate",
  "peach","guava","rose","lotus","tulip","sunflower","daisy",
  "marigold","jasmine","lily"
];

let word = document.getElementById("word");
let input = document.getElementById("input");
let time = document.getElementById("time");
let score = document.getElementById("score");
let start = document.getElementById("start");
let restart = document.getElementById("restart");

let timeLeft = 60;
let sc = 0;
let timer;
let currentWord = "";

function startGame() {
  timeLeft = 60;
  sc = 0;
  input.disabled = false;
  input.value = "";
  input.focus();
  score.textContent = sc;
  time.textContent = timeLeft;
  start.style.display = "none";
  restart.style.display = "inline-block";
  word.textContent = "";
  nextWord();

  timer = setInterval(() => {
    timeLeft--;
    time.textContent = timeLeft;
    if (timeLeft === 0) {
      endGame();
    }
  }, 1000);
}

function nextWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  word.textContent = currentWord;
  input.value = "";
}

function endGame() {
  clearInterval(timer);
  input.disabled = true;
  word.textContent = `Game Over! Your Score: ${sc}`;
}

function restartGame() {
  clearInterval(timer);
  startGame();
}

input.addEventListener("input", () => {
  if (input.value === currentWord) {
    sc++;
    score.textContent = sc;
    nextWord();
  }
});

start.addEventListener("click", startGame);
restart.addEventListener("click", restartGame);
