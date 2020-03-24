import readlineSync from 'readline-sync';
import random from '../auxuliary.js';
import startEngine from '../index.js';


const gameGcd = (needRules) => {
  const [firstNum, secondNum] = [random(), random()];

  const gcd = (x, y) => (!y ? x : gcd(y, x % y));

  if (needRules) console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${firstNum} ${secondNum}`);
  const trueAnswer = gcd(firstNum, secondNum);
  const answer = Number(readlineSync.question('Your answer: '));
  if (answer === trueAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}"`);
  return false;
};
const startGameGcd = () => {
  startEngine(gameGcd);
};

export default startGameGcd;
