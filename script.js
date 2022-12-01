function get_computer_choice () {
    let choices = ['rock', 'paper', 'scissors']
    return choices[getRandomInt(0, 2)]
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function play_game (player, comp) {
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
    //console.log(result)
    return result
}

function console_play() {
    let comp = get_computer_choice()
    let player = get_player_choice()
    let win_or_lose = play_game(player, comp)
    return win_or_lose
}


function best_of_five() {
    let player_score = 0
    let comp_score = 0
    while (player_score < 5 && comp_score < 5) {
        let final_result = console_play()
        final_result == 'win' ? player_score++ : comp_score++
        console.log(`
        Player Score = ${player_score}
        Computer Score = ${comp_score}
        `)
    }
    console.log(`GAME OVER`)
}
//best_of_five()

// GET ITEMS FROM THE DOCUMENT
let rps_imgs = document.querySelectorAll('.rps-imgs')
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')

// ADD EVENT LISTENERS TO THE RPS-IMGS CLASS
rps_imgs.forEach(element => {
    element.addEventListener('mouseenter', highlightOption)
    element.addEventListener('mouseleave', highlightOption)
});

// EVENT LISTENERS FOR INDIVIDUAL PLAYER SELECTIONS
rock.addEventListener('click', getPlayerChoice)
paper.addEventListener('click', getPlayerChoice)
scissors.addEventListener('click', getPlayerChoice)

function getPlayerChoice(e) {
    let playerChoice = e.target.alt
    //console.log(`Player clicked ${playerChoice}`)
}

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
