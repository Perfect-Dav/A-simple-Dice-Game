function gameInstruction() {
    alert("Hello! Welcome to this simple Dice game created by me (Don't worry about that, lol.) \n\nThe rule of the game are: \n\n- The game has 2 players, playing in rounds In each turn, a player rolls a dice as many times as he wishes. \n- Each result get added to his ROUND score BUT, if the player rolls a 1, all his ROUND score gets lost. \n- After that, it's the next player's turn The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. \n- After that, it's the next player's turn The first player to reach 20 points on GLOBAL score wins the game. \n\nGoodLuck!");
}
gameInstruction();

var scores, roundScore, activePlayer, dice, gamePlaying;

newGame();

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
}

function roll() {
    if (gamePlaying) {
    dice = Math.floor(Math.random() * 6) + 1;

    var diceDom = document.querySelector('.dice');

    diceDom.style.display = 'block';

    diceDom.src = 'dice-' + dice + '.png';

    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
       nextPlayer();
    }
    }
}

document.querySelector('.btn-roll').addEventListener('click', roll);

function hold() {
    if (gamePlaying) {
    scores[activePlayer] += roundScore;

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

        document.querySelector('.dice').style.display = 'none';

        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        
        gamePlaying = false;

    } else {
        nextPlayer();
    }

    }
}

document.querySelector('.btn-hold').addEventListener('click', hold);


document.querySelector('.btn-new').addEventListener('click', newGame);

function newGame() {
    scores = [0, 0];

    roundScore = 0;

    activePlayer = 0;

    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
