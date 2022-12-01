function get_computer_choice () {
    let choices = ['rock', 'paper', 'scissors']
    return choices[getRandomInt(0, 2)]
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
function display_comp_choice() {
    document.getElementById('comp_choice').innerHTML = get_computer_choice()
}
*/

function get_player_choice() {
    //let player_choice = document.getElementById('player_choice').value
    //let player_choice = window.prompt('Enter choice')
    return player_choice
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

//console_play()
/*
function start_game() {
    const play_button = document.getElementById('play_button')
    play_button.addEventListener('click', play_game)
    let player_score = 0
    let comp_score = 0
}

start_game()

*/

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