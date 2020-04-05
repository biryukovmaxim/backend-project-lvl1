import startEngine from '../index.js';
import random from '../auxuliary.js';

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

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gamePrime = () => {
  const number = random(0, 100);
  const result = isPrime(number) ? 'yes' : 'no';
  return [number, result];
};

const startGamePrime = () => {
  startEngine({
    rule: rules,
    gameFunc: gamePrime,
  });
};
export default startGamePrime;
