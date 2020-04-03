import startEngine from '../index.js';


const gameEven = (params) => {
  const isEven = (num) => num % 2 === 0;
  return isEven(params[0]) ? 'yes' : 'no';
};

const startGameEven = () => {
  startEngine({
    rule: 'Answer "yes" if the number is even, otherwise answer "no".',
    function: gameEven,
    params: [{ min: 0, max: 100, type: 'number' }],
  });
};

export default startGameEven;
