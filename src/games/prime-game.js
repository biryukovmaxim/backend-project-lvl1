import startEngine from '../index.js';
import makeObject from '../makeObject';

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

const gamePrime = (params) => (isPrime(params[0]) ? 'yes' : 'no');

const startGamePrime = () => {
  const [rule, gameFunction, params] = ['Answer "yes" if given number is prime. Otherwise answer "no".',
    gamePrime,
    [{ min: 0, max: 100, type: 'number' }]];

  startEngine(makeObject(rule, gameFunction, params));
};
export default startGamePrime;
