
const player1 = {
    name: 'name1',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['weapon1', 'weapon2', 'weapon3'],
    attack: function( ){
        console.log( player1.name + 'fight')
    }
};

const player2 = {
    name: 'name2',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['weapon1', 'weapon2', 'weapon3'],
    attack: function( ){
        console.log( player2.name + 'fight')
    }
};

// player1.attack();
// player2.attack();

function createPlayer(playerName, playerText){
    const player1 = document.createElement('div');
    player1.classList.add('player1');
    player1.innerText = playerName;

    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');

    const character = document.createElement('div');
    character.classList.add('character');

    const live = document.createElement('div');
    live.classList.add('live');
    live.style.width = '100%';

    const text = document.createElement('p');
    text.innerText = playerText;

    const name = document.createElement('div');

    const img = document.createElement('img');
    img.src = playerName.img

    const arena = document.querySelector('.arenas');


    progressbar.appendChild(live);
    progressbar.appendChild(name);
    player1.appendChild(progressbar);
    player1.appendChild(character);
    character.appendChild(img);
    name.classList.add('name');
    name.appendChild(text);
    arena.appendChild(player1)
    }

    createPlayer(player1, 'Bubi');
    createPlayer(player2, 'Rubi');