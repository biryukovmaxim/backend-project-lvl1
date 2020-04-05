import startEngine from '../index.js';

const gcd = (x, y) => (!y ? x : gcd(y, x % y));

const gameGcd = (params) => gcd(params[0], params[1]);

const startGameGcd = () => {
  startEngine({
    rule: 'Find the greatest common divisor of given numbers.',
    function: gameGcd,
    params: [{ min: 0, max: 100, type: 'number' },
      { min: 0, max: 100, type: 'number' }],
  });
};
export default startGameGcd;
