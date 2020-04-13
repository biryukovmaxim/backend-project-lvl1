import startEngine from '../index.js';
import random from '../random.js';

const operations = ['-', '+', '*'];

const gameCalc = () => {
  const [num1, operationSign, num2] = [random(0, 100), operations[random(0, 2)], random(0, 100)];
  const mathExpression = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  return [`${num1} ${operationSign} ${num2}`, String(mathExpression[operationSign](num1, num2))];
};
const description = 'What is the result of the expression?';

const startGameCalc = () => {
  startEngine(description, gameCalc);
};
export default startGameCalc;
