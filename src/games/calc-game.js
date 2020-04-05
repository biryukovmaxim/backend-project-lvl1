import startEngine from '../index.js';
import makeObject from '../makeObject.js';

const gameCalc = (params) => {
  let result;
  switch (params[1]) {
    case '+':
      result = params[0] + params[2];
      break;
    case '-':
      result = params[0] - params[2];
      break;
    case '*':
      result = params[0] * params[2];
      break;
    default:
      return 'error';
  }
  return result;
};

const startGameCalc = () => {
  const [rule, gameFunction, params] = ['What is the result of the expression?',
    gameCalc,
    [{ min: 0, max: 100, type: 'number' },
      { min: 0, max: 2, type: 'mathSymbol' },
      { min: 0, max: 100, type: 'number' }]];

  startEngine(makeObject(rule, gameFunction, params));
};

export default startGameCalc;
