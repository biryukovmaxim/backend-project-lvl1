import startEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const gameEven = () => {
  const num = getRandomInt(0, 100);
  const answer = isEven(num) ? 'yes' : 'no';
  const question = String(num);
  return [question, answer];
};

const startGameEven = () => {
  startEngine(description, gameEven);
};
export default startGameEven;
