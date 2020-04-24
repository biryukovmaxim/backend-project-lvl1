import playGame from '../index.js';
import getRandomInt from '../utils.js';


const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const getGameData = () => {
  const num = getRandomInt(0, 100);
  const answer = isPrime(num) ? 'yes' : 'no';
  const question = String(num);
  return [question, answer];
};

const startGamePrime = () => {
  playGame(description, getGameData);
};
export default startGamePrime;
