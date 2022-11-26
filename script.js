function get_computer_choice () {
    let choices = ['rock', 'paper', 'scissors']
    return choices[getRandomInt(0, 2)]
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//console.log(get_computer_choice())

/*
function display_comp_choice() {
    document.getElementById('comp_choice').innerHTML = get_computer_choice()
}
*/

function get_player_choice() {
    let player_choice = document.getElementById('player_choice').value.toLowerCase()
}

