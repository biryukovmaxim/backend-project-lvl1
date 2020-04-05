import startEngine from '../index.js';
import random from '../random.js';
import checkAndAnswer from '../checkAndAnswer.js';

const isEven = (num) => num % 2 === 0;

const gameEven = () => checkAndAnswer(random(0, 100), isEven);

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGameEven = () => {
  startEngine({
    rule: rules,
    gameFunc: gameEven,
  });
};
export default startGameEven;
