let round = 0

// GET ITEMS FROM THE DOCUMENT
const body = document.querySelector('body')
const rps_imgs = document.querySelectorAll('.rps-imgs')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const announcement = document.getElementById('announcement')

// ADD EVENT LISTENERS TO THE RPS-IMGS CLASS
rps_imgs.forEach(element => {
    element.addEventListener('mouseenter', highlightOption)
    element.addEventListener('mouseleave', highlightOption)
});

// EVENT LISTENERS FOR INDIVIDUAL PLAYER SELECTIONS
rock.addEventListener('click', startRound)
paper.addEventListener('click', startRound)
scissors.addEventListener('click', startRound)

// FUNCTION TO MAKE THE RPS BUTTONS HIGHLIGHT ON HOVER 
// COULD BE CSS BUT EXPERIMENTING WITH DOM
function highlightOption(e) {
    let option = e.target.id
    if (e.type == 'mouseenter') {
        let thisOption = document.getElementById(option)
        thisOption.className = 'highlight'
    } 
    if (e.type == 'mouseleave') {
        let thisOption = document.getElementById(option)
        thisOption.className = 'rps-imgs'
    } 
}

function startRound(e) {
    round++
    let playerChoice = e.target.alt
    let computerChoice = getComputerChoice()
    let roundResult = playGame(playerChoice, computerChoice)
    scoreboard(roundResult)
    console.log(roundResult)
}

function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors']
    return choices[getRandomInt(0, 2)]
}

// RANDOM NUMBER GENERATOR TO DETERMINE COMPUTER CHOICE
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// DETERMINE WHO WON FROM PLAYER CHOICE AND COMPUTER SELECTION
function playGame (player, comp) {
    let hierarchy = {
        rock: {
            scissors: 'win',
            paper: 'lose',
            rock: 'tie'
        },
        paper: {
            rock: 'win',
            scissors: 'lose',
            paper: 'tie'
        },
        scissors: {
            paper: 'win',
            rock: 'lose',
            scissors: 'tie'
        }
    }

    let result = hierarchy[player][comp]
    return result
}


function scoreboard(roundResult) {
    let playerScoreElement = document.getElementById('player-score')
    let playerScore = playerScoreElement.textContent
    let computerScoreElement = document.getElementById('computer-score')
    let computerScore = computerScoreElement.textContent
    
    // ADD SCORE AND DISPLAY ON SCOREBOARD
    if (roundResult == 'win') {
        playerScore ++
        playerScoreElement.textContent = playerScore
    }
    if (roundResult == 'lose') {
        computerScore ++
        computerScoreElement.textContent = computerScore
    }

    // IF A SCORE HITS 5, DISPLAY THE WINNER PAGE
    if (playerScore == 5) {
        declareWinner('player')
    }

    if (computerScore == 5) {
        declareWinner('computer')
    }

    // OTHERWISE DISPLAY ROUND RESULT AND CONTINUE GAME
    const resultStr = {'win': 'You win!',
    'lose': 'You lose.',
    'tie': 'It\'s a tie!'
    }
    announcement.textContent = `Round ${round}: ${resultStr[roundResult]}`
}


function declareWinner(winner) {
    let declaration
    if (winner == 'player') {
        declaration = 'YOU WIN!'
    } else {
        declaration = 'THE COMPUTER WINS!'
    }
    //REMOVE ALL HTML 
    const fullscreen = document.getElementById('fullscreen')
    fullscreen.innerHTML = ''

    //CREATE WINNER DECLARATION PAGE
    const declarationContainer = document.createElement('div')
    declarationContainer.id = 'declaration-container'
    
    const declarationDiv = document.createElement('div')
    declarationDiv.id = 'winner'
    declarationDiv.textContent = `${declaration}`
    declarationContainer.appendChild(declarationDiv)

    const playAgainContainer = document.createElement('div')
    playAgainContainer.id = 'play-again-div'
    
    const playAgainDiv = document.createElement('div')
    playAgainDiv.textContent = 'Play again?'
    playAgainDiv.style.fontSize = '20px'
    playAgainContainer.appendChild(playAgainDiv)
    const yesDiv = document.createElement('button')
    yesDiv.id = 'yes-btn'
    yesDiv.textContent = 'YES'
    playAgainContainer.appendChild(yesDiv)
    
    fullscreen.style.justifyContent = 'center';
    fullscreen.appendChild(declarationContainer);
    fullscreen.appendChild(playAgainContainer);

    //YES BUTTON TO RESET GAME
    yesDiv.addEventListener('click', () => location.reload())

}
