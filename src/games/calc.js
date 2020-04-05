import startEngine from '../index.js';



    switch (caseNumber) {
      case 0:
        return '+';
      case 1:
        return '-';
      case 2:
        return '*';
      default:
        break;
    }


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
  return String(result);
};
const rules = 'What is the result of the expression?';

const startGameCalc = () => {
  startEngine({
    rule: rules,
    function: gameCalc,
    params: [{ min: 0, max: 100, type: 'number' },
      { min: 0, max: 2, type: 'mathSymbol' },
      { min: 0, max: 100, type: 'number' }],
  });
};
export default startGameCalc;
