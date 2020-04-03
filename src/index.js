import readlineSync from 'readline-sync';
import transform from './auxuliary.js';

const gameEngine = (game) => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);

  let count = 0;
  let win = true;
  console.log(game.rule);

  while (win && count < 3) {
    const questionObject = transform(game.params);
    const question = questionObject.question.join(' ');
    const answer = readlineSync.question(`Question: ${question} \nYour answer: `);
    const trueAnswer = String(game.function(questionObject.forGameFunction));
    win = (trueAnswer === answer);
    if (win) {
      count += 1;
      console.log('Correct!');
    } else console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${name}!`);
  }

  if (count === 3) console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
