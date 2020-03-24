import readlineSync from 'readline-sync';
import random from '../auxuliary.js';
import startEngine from '../index.js';

const gameCalc = (needRules) => {
  const [firstNum, secondNum, numOfOperation] = [random(), random(), random(0, 2)];

  let operation;
  // eslint-disable-next-line no-tabs
  switch (numOfOperation)	{
    case 0:
      operation = { operationSymbol: '+', operationFunction: (a, b) => a + b };
      break;
    case 1:
      operation = { operationSymbol: '-', operationFunction: (a, b) => a - b };
      break;
    case 2:
      operation = { operationSymbol: '*', operationFunction: (a, b) => a * b };
      break;
    default: break;
  }

  if (needRules) console.log('What is the result of the expression?');
  console.log(`Question: ${firstNum} ${operation.operationSymbol} ${secondNum}`);
  const trueAnswer = operation.operationFunction(firstNum, secondNum);
  const answer = Number(readlineSync.question('Your answer: '));
  if (answer === trueAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}"`);
  return false;
};

const startGameCalc = () => {
  startEngine(gameCalc);
};

export default startGameCalc;
