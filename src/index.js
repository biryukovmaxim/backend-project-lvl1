import readlineSync from 'readline-sync';

const roundsToWin = 3;

const playGame = (description, playRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log(description);
  for (let count = 0; (count < roundsToWin); count += 1) {
    const [question, trueAnswer] = playRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (trueAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
