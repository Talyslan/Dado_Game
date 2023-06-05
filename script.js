const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const title = document.getElementsByTagName("h1")[0];

const imagens = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

function jogar() {
  let sortear_img1 = Math.floor(Math.random() * 5);
  console.log('indice 1 ' + sortear_img1);
  
  let sortear_img2 = Math.floor(Math.random() * 5);
  console.log('indice 2 ' + sortear_img2);

  let img_escolhida_1 = imagens[sortear_img1];
  let img_escolhida_2 = imagens[sortear_img2];

  img1.src = `./imagens/${img_escolhida_1}`;
  img2.src = `./imagens/${img_escolhida_2}`;

  if (sortear_img1 > sortear_img2)
    title.innerHTML = `O jogador 1 é o vencedor! 👑`;
  else if (sortear_img2 > sortear_img1)
    title.innerHTML = `O jogador 2 é o vencedor! 👑`;
  else if (sortear_img1 == sortear_img2)
    title.innerHTML = `Empate!😯`;
}

function reset() {
  title.innerHTML = `Empate!😯`;
  img1.src = `./imagens/${img_escolhida_1}`;
  img2.src = `./imagens/${img_escolhida_1}`;
}