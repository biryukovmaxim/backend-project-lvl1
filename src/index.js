import readlineSync from 'readline-sync';
import gameEven from './games/even-game.js';
import gameCalc from './games/calc-game.js';
import gameGcd from './games/gcd-game.js';
import gameProgression from './games/progression-game.js';
import gamePrime from './games/prime-game.js';

const game = (gameName) => {
  let functionGame;

  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);


  switch (gameName) {
    case 'even':
      functionGame = (params) => gameEven(params);
      break;
    case 'calc':
      functionGame = (params) => gameCalc(params);
      break;
    case 'gcd':
      functionGame = (params) => gameGcd(params);
      break;
    case 'progression':
      functionGame = (params) => gameProgression(params);
      break;
    case 'prime':
      functionGame = (params) => gamePrime(params);
      break;
    default:
      functionGame = () => {};
      break;
  }


  let count = 0;
  let win = true;

  while (win && count < 3) {
    win = count === 0 ? functionGame(true) : functionGame(false);
    if (win) count += 1;
  }

  if (count === 3) console.log(`Congratulations, ${name}!`);
  else console.log(`Let's try again, ${name}!`);
};

export default game;
