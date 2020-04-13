import startEngine from '../index.js';
import random from '../random.js';

const gcd = (x, y) => (!y ? x : gcd(y, x % y));

const gameGcd = () => {
  const [firstNum, secondNum] = [random(0, 100), random(0, 100)];
  return [[firstNum, secondNum].join(' '), String(gcd(firstNum, secondNum))];
};
const description = 'Find the greatest common divisor of given numbers.';
const startGameGcd = () => {
  startEngine(description, gameGcd);
};
export default startGameGcd;
