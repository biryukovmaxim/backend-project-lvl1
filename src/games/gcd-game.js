import startEngine from '../index.js';
import makeObject from '../makeObject';

const gcd = (x, y) => (!y ? x : gcd(y, x % y));

const gameGcd = (params) => gcd(params[0], params[1]);

const startGameGcd = () => {
  const [rule, gameFunction, params] = ['Find the greatest common divisor of given numbers.',
    gameGcd,
    [{ min: 0, max: 100, type: 'number' },
      { min: 0, max: 100, type: 'number' }]];

  startEngine(makeObject(rule, gameFunction, params));
};
export default startGameGcd;
