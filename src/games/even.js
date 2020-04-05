import startEngine from '../index.js';
import random from '../auxuliary.js';

const isEven = (num) => num % 2 === 0;

const gameEven = () => {
  const number = random(0, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGameEven = () => {
  startEngine({
    rule: rules,
    gameFunc: gameEven,
  });
};
export default startGameEven;
