import startEngine from '../index.js';
import random from '../random.js';
import checkAndAnswer from '../checkAndAnswer.js';

const isEven = (num) => num % 2 === 0;

const gameEven = () => checkAndAnswer(random(0, 100), isEven);

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGameEven = () => {
  startEngine(description, gameEven);
};
export default startGameEven;
