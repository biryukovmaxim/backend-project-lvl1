import readlineSync from 'readline-sync';


const gameEngine = (description, gameFunc) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log(description);
  const roundsToWin = 3;
  for (let [count, win] = [0, true]; (win && count < roundsToWin); count += 1) {
    const [question, trueAnswer] = gameFunc();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    win = (trueAnswer === answer);
    if (win) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
    }
    if (count === roundsToWin) console.log(`Congratulations, ${name}!`);
    if (!win) console.log(`Let's try again, ${name}!`);
  }
};

export default gameEngine;
