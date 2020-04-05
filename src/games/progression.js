import startEngine from '../index.js';

const makeProgression = (array) => {
  const [a0, delta, substitutionNumber] = array;
  const progressionArray = [];
  for (let i = 0; i < 10; i += 1) {
    progressionArray[i] = (i === substitutionNumber) ? '..' : a0 + delta * i;
  }
  return progressionArray;
};

const gameProgression = (params) => {
  const [a0, delta, substitutionNumber] = params;
  return String(a0 + delta * substitutionNumber);
};

const startGameProgression = () => {
  startEngine({
    rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    function: gameProgression,
    params: [{ min: 0, max: 100, type: 'progressNumber' },
      { min: 0, max: 100, type: 'progressNumber' },
      { min: 0, max: 10, type: 'progressNumber' }],
  });
};
export default startGameProgression;
