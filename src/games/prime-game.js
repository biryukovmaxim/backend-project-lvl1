import startEngine from '../index.js';

const gamePrime = (params) => {
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
  return isPrime(params[0]) ? 'yes' : 'no';
};

const startGamePrime = () => {
  startEngine({
    rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    function: gamePrime,
    params: [{ min: 0, max: 100, type: 'number' }],
  });
};
export default startGamePrime;
