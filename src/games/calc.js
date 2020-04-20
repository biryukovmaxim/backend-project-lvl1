import startEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What is the result of the expression?';

const operationCount = 3;

const mathExpressions = {
  0: { getResult: (a, b) => a + b, operationSym: '+' },
  1: { getResult: (a, b) => a - b, operationSym: '-' },
  2: { getResult: (a, b) => a * b, operationSym: '*' },
};

const getGameEvenPair = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const operationID = getRandomInt(0, operationCount - 1);
  const operationSign = mathExpressions[operationID].operationSym;
  getRandomInt(0, 100);
  const question = `${num1} ${operationSign} ${num2}`;
  const answer = String(mathExpressions[operationID].getResult(num1, num2));
  return [question, answer];
};

const startGameCalc = () => {
  startEngine(description, getGameEvenPair);
};
export default startGameCalc;
