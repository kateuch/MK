const arenas = document.querySelector(".arenas");
const buttonAttack = document.querySelector(".button");
buttonAttack.disabled = false;

const img1 = "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif";
const img2 = "http://reactmarathon-api.herokuapp.com/assets/kitana.gif";
const img3 = "http://reactmarathon-api.herokuapp.com/assets/liukang.gif";
const img4 = "http://reactmarathon-api.herokuapp.com/assets/sonya.gif";
const img5 = "http://reactmarathon-api.herokuapp.com/assets/subzero.gif";

const player1 = {
  player: 1,
  name: "Rubi",
  hp: 100,
  img: img1,
  weapon: ["weapon1", "weapon2", "weapon3"],
  attack: function () {
    alert(this.name + "fight");
  },
};

const player2 = {
  player: 2,
  name: "Bubi",
  hp: 100,
  img: img4,
  weapon: ["weapon1", "weapon2", "weapon3"],
  attack: function () {
    alert(this.name + "fight");
  },
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  return $tag;
}

function createPlayer(playerObj) {
  const player = createElement("div", "player" + playerObj.player);
  const progressbar = createElement("div", "progressbar");
  const character = createElement("div", "character");

  const life = createElement("div", "life");
  life.style.width = playerObj.hp + "%";

  const name = createElement("div", "name");
  name.innerText = playerObj.name;

  const img = createElement("img");
  img.src = playerObj.img;

  progressbar.appendChild(life);
  progressbar.appendChild(name);
  player.appendChild(progressbar);
  player.appendChild(character);
  character.appendChild(img);

  return player;
}

function changeHP(player) {
  const playerLife = document.querySelector(
    ".player" + player.player + " .life"
  );
  player.hp -= Math.ceil(Math.random() * 20);
  playerLife.style.width = player.hp + "%";

  console.log(player.player, "-", player.hp);
  console.log(player.player, "-", playerLife.style.width);
  if (player.hp <= 0) {
    player.hp = 0;
    buttonAttack.remove();

    if (player1.hp <= 0) {
      arenas.appendChild(playerWin(player2.name));
    }
    if (player2.hp <= 0) {
      arenas.appendChild(playerWin(player1.name));
    }
  }
}

function playerWin(name) {
  const winTitle = createElement("div", "winTitle");
  winTitle.innerText = name + " win";

  return winTitle;
}

buttonAttack.addEventListener("click", function () {
  changeHP(player1);
  changeHP(player2);
});

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));
