import readlineSync from 'readline-sync';
import gameEven from './even-game.js';

const game = (gameName) => {
  const askName = () => {
    const answer = readlineSync.question('May I have your name?: ');
    return answer;
  };
  const name = askName();
  console.log(`Hello, ${name}`);

  let count = 0;
  let win = true;
  if (gameName === 'even') {
    while (win && count < 3) {
      win = gameEven();
      count += 1;
    }
    if (count === 3) console.log(`Congratulations, ${name}!`);
    else console.log(`Let's try again, ${name}!`);
  }
};

export default game;
