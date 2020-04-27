import playGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What is the result of the expression?';

const getResult = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getGameData = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const randomIndexOfSign = getRandomInt(0, Object.keys(getResult).length - 1);
  const operationSign = Object.keys(getResult)[randomIndexOfSign];
  const question = `${num1} ${operationSign} ${num2}`;
  const answer = String(getResult[operationSign](num1, num2));
  return [question, answer];
};

const startGameCalc = () => {
  playGame(description, getGameData);
};
export default startGameCalc;
