import startEngine from '../index.js';
import random from '../random.js';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  } if (n === 2) {
    return true;
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

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gamePrime = () => {
  const num = random(0, 100);
  const answer = isPrime(num) ? 'yes' : 'no';
  return [num, answer];
};

const startGamePrime = () => {
  startEngine(description, gamePrime);
};
export default startGamePrime;
