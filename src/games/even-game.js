import startEngine from '../index.js';

const isEven = (num) => num % 2 === 0;

const gameEven = (params) => (isEven(params[0]) ? 'yes' : 'no');

const startGameEven = () => {
  startEngine({
    rule: 'Answer "yes" if the number is even, otherwise answer "no".',
    function: gameEven,
    params: [{ min: 0, max: 100, type: 'number' }],
  });
};

export default startGameEven;
