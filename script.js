const img1 = document.getElementsByTagName("img")[0];
const box1 = document.getElementsByClassName("box")[0];
const img2 = document.getElementsByTagName("img")[1];
const box2 = document.getElementsByClassName("box")[1];

const points1_HTML = document.getElementById("points1");
const points2_HTML = document.getElementById("points2");

const result = document.getElementById("putAnswer");
const btnPlay = document.getElementById("rollDices");
const btnReset = document.getElementById("reset");

function removeClass() {
  box1.classList.remove('winner');
  box1.classList.remove('draw');
  box2.classList.remove('winner');
  box2.classList.remove('draw');
}

let points1 = 0;
let points2 = 0;

function play() {
  removeClass();
  //sorteio
  const player1 = Math.floor(Math.random() * 5 + 1);
  const player2 = Math.floor(Math.random() * 5 + 1);

  img1.src = `./imagens/dado/dice${player1}.png`;
  img2.src = `./imagens/dado/dice${player2}.png`;

  //verificação do resultado
  if (player1 > player2) {
    result.innerHTML = `Player 1 is winner! 👑`;
    box1.classList.add('winner');
    points1++;
    points1_HTML.innerHTML = points1;
  }
  else if (player2 > player1) {
    result.innerHTML = `Player 2 is winner! 👑`;
    box2.classList.add('winner');
    points2++;
    points2_HTML.innerHTML = points2;
  }
  else if (player1 == player2) {
    result.innerHTML = `Draw!😯`;
    box1.classList.add('draw');
    box2.classList.add('draw');
  }
}

function reset() {
  removeClass();
  const urlImg1 = "./imagens/dado/dice1.png"
  result.innerHTML = `Click on Button to Play`;
  img1.src = urlImg1;
  img2.src = urlImg1;

  points1 = 0;
  points2 = 0;

  points1_HTML.innerHTML = points1;
  points2_HTML.innerHTML = points2;
}

btnPlay.addEventListener("click", play);
btnReset.addEventListener("click", reset);