import startEngine from '../index.js';
import makeObject from '../makeObject';

const isEven = (num) => num % 2 === 0;

const gameEven = (params) => (isEven(params[0]) ? 'yes' : 'no');

const startGameEven = () => {
  const [rule, gameFunction, params] = ['Answer "yes" if the number is even, otherwise answer "no".',
    gameEven,
    [{ min: 0, max: 100, type: 'number' }]];
  startEngine(makeObject(rule, gameFunction, params));
};

export default startGameEven;
