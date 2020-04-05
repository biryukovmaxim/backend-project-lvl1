import readlineSync from 'readline-sync';

const congrats = (result, name) => {
  if (result) return `Congratulations, ${name}!`;
  return `Let's try again, ${name}!`;
};

const gameEngine = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log(game.rule);
  let resultOfGame = true;

  for (let [count, win] = [0, true]; (win && count < 3); count += 1) {
    const [question, trueAnswer] = game.gameFunc();
    const answer = readlineSync.question(`Question: ${question} \nYour answer: `);
    win = (trueAnswer === answer);
    if (win) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
      resultOfGame = false;
    }
  }
  console.log(congrats(resultOfGame, name));
};

export default gameEngine;
