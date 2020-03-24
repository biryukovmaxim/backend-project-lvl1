import readlineSync from 'readline-sync';

const game = (functionGame) => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);

  let count = 0;
  let win = true;

  while (win && count < 3) {
    win = count === 0 ? functionGame(true) : functionGame(false);
    if (win) count += 1;
  }

  if (count === 3) console.log(`Congratulations, ${name}!`);
  else console.log(`Let's try again, ${name}!`);
};

export default game;
