import startEngine from '../index.js';
import getRandomInt from '../utils.js';

const progressionLength = 10;

const description = 'What number is missing in the progression?';

const makeProgressionQuestion = (array) => {
  const [a0, delta, substitutionNumber] = array;
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = (i === substitutionNumber) ? '..' : a0 + delta * i;
  }
  return progression;
};

const getGameProgressionPair = () => {
  const a0 = getRandomInt(0, 100);
  const delta = getRandomInt(0, 100);
  const substitutionNumber = getRandomInt(0, progressionLength - 1);
  const question = makeProgressionQuestion([a0, delta, substitutionNumber]).join(' ');
  const answer = String(a0 + delta * substitutionNumber);
  return [question, answer];
};

const startGameProgression = () => {
  startEngine(description, getGameProgressionPair);
};
export default startGameProgression;
