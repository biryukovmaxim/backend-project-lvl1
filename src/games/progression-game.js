import startEngine from '../index.js';
import makeObject from '../makeObject';

const gameProgression = (params) => {
  const [a0, delta, substitutionNumber] = params;
  return a0 + delta * substitutionNumber;
};

const startGameProgression = () => {
  const [rule, gameFunction, params] = ['Answer "yes" if given number is prime. Otherwise answer "no".',
    gameProgression,
    [{ min: 0, max: 100, type: 'progressNumber' },
      { min: 0, max: 100, type: 'progressNumber' },
      { min: 0, max: 10, type: 'progressNumber' }]];

  startEngine(makeObject(rule, gameFunction, params));
};

export default startGameProgression;
