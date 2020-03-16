import isWinEvenGame from '../src/even-game.js';
import askName from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = askName();

if (isWinEvenGame()) { console.log(`Congratulations, ${name}!`); } else console.log(`Let's try again, ${name}!`);
