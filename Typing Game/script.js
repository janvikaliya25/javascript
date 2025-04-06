
const words = ["mango","apple", "banana", "cherry","orange","pineapple","grapes","watermelon","strawberry","papaya","blueberry","kiwi","pomegranate","peach","guava","rose","lotus","tulip","sunflower","daisy","marigold","jasmine","lily"];

let word = document.getElementById("word");
let input = document.getElementById("input");
let time = document.getElementById("time");
let score = document.getElementById("score");
let start = document.getElementById("start");
let restart = document.getElementById("restart");

let tm = 0;
let sc = 0;
let timer;
let currentword = "";

function startgame() {
    tm = 0;
    sc = 0;

    input.value = "";
    input.disabled = false;
    input.focus();
    score.textContent = sc;
    time.textContent = tm;
    start.style.display = "none"; 
    restart.style.display = "inline-block"; 
    newword();
    timer = setInterval(() => {
        time.textContent = tm;
        tm++;
    }, 1000);
}

function newword() {
    currentword = words[Math.floor(Math.random() * words.length)];
    word.textContent = currentword;
    input.value = "";
}

function restartgame() {
    clearInterval(timer);
    startgame();
}

input.addEventListener("input", () => {
    if (input.value == currentword) {
        score.textContent = sc;
        sc++;
        newword();
    }
});

start.addEventListener("click", startgame);
restart.addEventListener("click", restartgame);
