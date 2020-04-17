import startEngine from '../index.js';
import getRandomInt from '../utils.js';


const description = 'What number is missing in the progression?';

const makeProgression = (array) => {
  const [a0, delta, substitutionNumber] = array;
  const progressionArray = [];
  for (let i = 0; i < 10; i += 1) {
    progressionArray[i] = (i === substitutionNumber) ? '..' : a0 + delta * i;
  }
  return progressionArray;
};

const gameProgression = () => {
  const a0 = getRandomInt(0, 100);
  const delta = getRandomInt(0, 100);
  const substitutionNumber = getRandomInt(0, 9);
  const question = makeProgression([a0, delta, substitutionNumber]).join(' ');
  const answer = String(a0 + delta * substitutionNumber);
  return [question, answer];
};

const startGameProgression = () => {
  startEngine(description, gameProgression);
};
export default startGameProgression;
