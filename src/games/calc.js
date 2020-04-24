import playGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What is the result of the expression?';


const mathExpressions = [
  { getResult: (a, b) => a + b, operationSym: '+' },
  { getResult: (a, b) => a - b, operationSym: '-' },
  { getResult: (a, b) => a * b, operationSym: '*' },
];

const operationCount = mathExpressions.length;

const getGameData = () => {
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
  playGame(description, getGameData);
};
export default startGameCalc;
