
const img1 = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif'
const img2 = 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif'
const img3 = 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif'
const img4 = 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif'
const img5 = 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif'

const player1 = {
    name: 'Rubi',
    hp: 50,
    img: img1,
    weapon: ['weapon1', 'weapon2', 'weapon3'],
    attack: function( ){
        alert( this.name + 'fight')
    }
};

const player2 = {
    name: 'Bubi',
    hp: 20,
    img: img4,
    weapon: ['weapon1', 'weapon2', 'weapon3'],
    attack: function( ){
        alert( this.name + 'fight')
    }
};

// player1.attack();
// player2.attack();

function createPlayer(playerNum, playerObj){
    const player1 = document.createElement('div');
    player1.classList.add(playerNum);

    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');

    const character = document.createElement('div');
    character.classList.add('character');

    const life = document.createElement('div');
    life.classList.add('life');
    life.style.width = playerObj.hp + '%';



    const name = document.createElement('div');
    name.innerText = playerObj.name

    const img = document.createElement('img');
    img.src = playerObj.img

    const arena = document.querySelector('.arenas');


    progressbar.appendChild(life);
    progressbar.appendChild(name);
    player1.appendChild(progressbar);
    player1.appendChild(character);
    character.appendChild(img);
    name.classList.add('name');

    arena.appendChild(player1)
    }

    createPlayer('player1', player1);
    createPlayer('player2', player2);