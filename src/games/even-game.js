import readlineSync from 'readline-sync';
import random from '../auxuliary.js';
// eslint-disable-next-line import/no-cycle
import startEngine from '../index.js';


const gameEven = (needRules = false) => {
  if (needRules) console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const isEven = (num) => num % 2 === 0;

  const value = random();
  const trueAnswer = isEven(value) ? 'yes' : 'no';
  const answer = readlineSync.question(`Question: ${value} \nYour answer: `);
  if (answer === trueAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}"`);
  return false;
};

const startGame = () => {
  startEngine(gameEven);
}

export default startGame;
