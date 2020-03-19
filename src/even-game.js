import readlineSync from 'readline-sync';

const gameEven = () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const isEven = (num) => num % 2 === 0;

  const value = getRandomInt(0, 100);
  const trueAnswer = isEven(value) ? 'yes' : 'no';
  const answer = readlineSync.question(`Question: ${value} \nYour answer: `);
  if (answer === trueAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}"`);
  return false;
};


export default gameEven;
