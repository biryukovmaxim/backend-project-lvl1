import readlineSync from 'readline-sync';
import random from '../auxuliary.js';
import startEngine from '../index.js';

const gameProgression = (needRules) => {
  const [a0, delta, substitutionNumber] = [random(), random(), random(0, 10)];

  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression[i] = (i === substitutionNumber) ? '..' : a0 + delta * i;
  }

  if (needRules) console.log('What number is missing in the progression?');
  console.log(`Question: ${progression.toString()}`);
  const trueAnswer = a0 + delta * substitutionNumber;
  const answer = Number(readlineSync.question('Your answer: '));
  if (answer === trueAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}"`);
  return false;
};

const startGameProgression = () => {
  startEngine(gameProgression);
};

export default startGameProgression;
