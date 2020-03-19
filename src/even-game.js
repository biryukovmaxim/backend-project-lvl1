import readlineSync from 'readline-sync';

const isWinEvenGame = () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const isEven = (num) => num % 2 === 0;

  let count = 0;

  const round = () => {
    const value = getRandomInt(0, 100);
    const trueAnswer = isEven(value) ? 'yes' : 'no';
    const answer = readlineSync.question(`Question:${value}`);
    if (answer === trueAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}"`);
      count = -1;
    }
  };

  while ((count !== 3) && (count !== -1)) round();

  if (count === 3) return true;
  return false;
};
export default isWinEvenGame;
