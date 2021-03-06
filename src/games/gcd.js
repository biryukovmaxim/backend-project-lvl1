import playGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => (!y ? x : gcd(y, x % y));

const getGameData = () => {
  const [firstNum, secondNum] = [getRandomInt(0, 100), getRandomInt(0, 100)];
  const question = `${firstNum} ${secondNum}`;
  const answer = String(gcd(firstNum, secondNum));
  return [question, answer];
};

const startGameGcd = () => {
  playGame(description, getGameData);
};
export default startGameGcd;
