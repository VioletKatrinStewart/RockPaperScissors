import { didUserWin, getRandomThrow } from './function.js';

const submitButton = document.getElementById('submit');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const errorMessage = document.getElementById('error');
const tieSpan = document.getElementById('ties');
const resultText = document.getElementById('result');

let wins = 0;
let losses = 0;
let ties = 0;

submitButton.addEventListener('click', () => {
  //console.log('click');
    const selected = document.querySelector('input[type=radio]:checked');
  //const randomThrow = getRandomThrow();
    if (!selected) {
        return errorMessage.classList.remove('hidden');
    }
    errorMessage.classList.add('hidden');

    const userChoice = selected.value;
    const computerChoice = getRandomThrow();
  //console.log(randomThrow);

    if (didUserWin(userChoice, computerChoice) === 1) {
        wins++;
        resultText.textContent = 'You win!';
        winSpan.textContent = wins;
    } else if (didUserWin(userChoice, computerChoice) === 2) {
        losses++;
        resultText.textContent = 'You lose!';
        lossSpan.textContent = losses;
    }
    else {
        ties++;
        tieSpan.textContent = ties;
    }
    //console.log(computerChoice);




});