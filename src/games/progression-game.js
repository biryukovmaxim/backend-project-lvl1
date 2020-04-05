import startEngine from '../index.js';

const gameProgression = (params) => {
  const [a0, delta, substitutionNumber] = params;
  return a0 + delta * substitutionNumber;
};

const startGameProgression = () => {
  const objectForEngine = {
    rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    function: gameProgression,
    params: [{ min: 0, max: 100, type: 'progressNumber' },
      { min: 0, max: 100, type: 'progressNumber' },
      { min: 0, max: 10, type: 'progressNumber' }],
  };
  startEngine(objectForEngine);
};

export default startGameProgression;
