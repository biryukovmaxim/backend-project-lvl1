import readlineSync from 'readline-sync';
import gameEven from './games/even-game.js';
import gameCalc from './games/calc-game.js';

const game = (gameName) => {
  let functionGame;

  const askName = () => {
    const answer = readlineSync.question('May I have your name?: ');
    return answer;
  };
  const name = askName();
  console.log(`Hello, ${name}`);


  switch (gameName) {
    case 'even':
      functionGame = (params) => gameEven(params);
      break;
    case 'calc':
      functionGame = (params) => gameCalc(params);
      break;
    default:
      functionGame = () => {};
      break;
  }


  let count = 0;
  let win = true;

  while (win && count < 3) {
    win = count === 0 ? functionGame(true) : functionGame(false);
    count += 1;
  }

  if (count === 3) console.log(`Congratulations, ${name}!`);
  else console.log(`Let's try again, ${name}!`);
};

export default game;
