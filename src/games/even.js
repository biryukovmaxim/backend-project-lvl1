import startEngine from '../index.js';
import random from '../random.js';

const isEven = (num) => num % 2 === 0;

const gameEven = () => {
  const num = random(0, 100);
  const answer = isEven(num) ? 'yes' : 'no';
  return [num, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGameEven = () => {
  startEngine(description, gameEven);
};
export default startGameEven;
