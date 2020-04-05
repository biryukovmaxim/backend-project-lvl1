import startEngine from '../index.js';
import random from '../auxuliary.js';

const numToSym = (num) => {
  switch (num) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      break;
  }
  return NaN;
};

const gameCalc = () => {
  const params = [random(0, 100), numToSym(random(0, 2)), random(0, 100)];
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
  return [params.join(' '), String(result)];
};
const rules = 'What is the result of the expression?';

const startGameCalc = () => {
  startEngine({
    rule: rules,
    gameFunc: gameCalc,
  });
};
export default startGameCalc;
