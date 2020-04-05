import startEngine from '../index.js';

const gcd = (x, y) => (!y ? x : gcd(y, x % y));

const gameGcd = (params) => String(gcd(params[0], params[1]));

const rules = 'Find the greatest common divisor of given numbers.';

const startGameGcd = () => {
  startEngine({
    rule: rules,
    function: gameGcd,
    params: [{ min: 0, max: 100, type: 'number' },
      { min: 0, max: 100, type: 'number' }],
  });
};
export default startGameGcd;
