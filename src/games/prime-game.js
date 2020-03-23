import readlineSync from 'readline-sync';
import random from '../auxuliary.js';

const gamePrime = (needRules = false) => {
  if (needRules) console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
  function isPrime(n) {
    if (n < 2) {
      return false;
    } if (n === 2) {
      return true;
    }

    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
      if (n % i === 0) {
        return false;
      }
      i += 1;
    }

    return true;
  }

  const value = random();
  const trueAnswer = isPrime(value) ? 'yes' : 'no';
  const answer = readlineSync.question(`Question: ${value} \nYour answer: `);
  if (answer === trueAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}"`);
  return false;
};


export default gamePrime;
