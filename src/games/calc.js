import startEngine from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What is the result of the expression?';

const operations = ['-', '+', '*'];

const gameCalc = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const operationSign = operations[getRandomInt(0, 2)];
  getRandomInt(0, 100);
  const mathExpression = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  const question = `${num1} ${operationSign} ${num2}`;
  const answer = String(mathExpression[operationSign](num1, num2));
  return [question, answer];
};

const startGameCalc = () => {
  startEngine(description, gameCalc);
};
export default startGameCalc;
