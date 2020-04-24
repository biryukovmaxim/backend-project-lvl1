import playGame from '../index.js';
import getRandomInt from '../utils.js';

const progressionLength = 10;

const description = 'What number is missing in the progression?';

const makeQuestion = (sourceNumber, delta, indexOfSub) => {
  const question = [];
  for (let i = 0; i < progressionLength; i += 1) {
    question[i] = (i === indexOfSub) ? '..' : sourceNumber + delta * i;
  }
  return question;
};

const getGameData = () => {
  const sourceNumber = getRandomInt(0, 100);
  const delta = getRandomInt(0, 100);
  const indexOfSub = getRandomInt(0, progressionLength - 1);
  const question = makeQuestion(sourceNumber, delta, indexOfSub);
  const answer = String(sourceNumber + delta * indexOfSub);
  return [question, answer];
};

const startGameProgression = () => {
  playGame(description, getGameData);
};
export default startGameProgression;
