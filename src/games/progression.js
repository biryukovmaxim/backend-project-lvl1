import startEngine from '../index.js';
import random from '../random.js';

const makeProgression = (array) => {
  const [a0, delta, substitutionNumber] = array;
  const progressionArray = [];
  for (let i = 0; i < 10; i += 1) {
    progressionArray[i] = (i === substitutionNumber) ? '..' : a0 + delta * i;
  }
  return progressionArray;
};

const gameProgression = () => {
  const [a0, delta, substitutionNumber] = [random(0, 100), random(0, 100), random(0, 9)];
  const question = makeProgression([a0, delta, substitutionNumber]).join(' ');
  return [question,
    String(a0 + delta * substitutionNumber)];
};

const startGameProgression = () => {
  startEngine({
    rule: 'What number is missing in the progression?',
    gameFunc: gameProgression,
  });
};
export default startGameProgression;
