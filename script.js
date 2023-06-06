const img1 = document.getElementsByTagName("img")[0];
const img2 = document.getElementsByTagName("img")[1];
const box1 = document.getElementsByClassName("box")[0];
const box2 = document.getElementsByClassName("box")[1];
const result = document.getElementsByTagName("span")[2];

const imagens = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

function jogar() {
  removeClass();
  //sorteio
  let sortear_img1 = Math.floor(Math.random() * 5 + 1);
  let sortear_img2 = Math.floor(Math.random() * 5 + 1);

  img1.src = `./imagens/dice${sortear_img1}.png`;
  img2.src = `./imagens/dice${sortear_img2}.png`;

  //verificação do resultado
  if (sortear_img1 > sortear_img2) {
    result.innerHTML = `Player 1 is winner! 👑`;
    box1.classList.add('winner');
  }
  else if (sortear_img2 > sortear_img1) {
    result.innerHTML = `Player 2 is winner! 👑`;
    box2.classList.add('winner');
  }
  else if (sortear_img1 == sortear_img2) {
    result.innerHTML = `Draw!😯`;
    box1.classList.add('draw');
    box2.classList.add('draw');
  }
}

function reset() {
  title.innerHTML = `Empate!😯`;
  img1.src = `./imagens/${img_escolhida_1}`;
  img2.src = `./imagens/${img_escolhida_1}`;
}

function removeClass() {
  box1.classList.remove('winner');
  box1.classList.remove('draw');
  box2.classList.remove('winner');
  box2.classList.remove('draw');
}