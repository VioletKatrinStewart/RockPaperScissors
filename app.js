import { didUserWin, getRandomThrow } from './function.js';

const submitButton = document.getElementById('submit');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const errorMessage = document.getElementById('error');
const tieSpan = document.getElementById('ties');

let wins = 0;
let losses = 0;
let ties = 0;

submitButton.addEventListener('click', () => {
  //console.log('click');
  const selected = document.querySelector('input[type=radio]:checked');
  const randomThrow = getRandomThrow();
  console.log(randomThrow);
});