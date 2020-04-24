import playGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = getRandomInt(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [String(question), answer];
};

const startGameEven = () => {
  playGame(description, getGameData);
};
export default startGameEven;
