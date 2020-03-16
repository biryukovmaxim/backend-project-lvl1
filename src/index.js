import readlineSync from 'readline-sync';

const askName = () => {
  const answer = readlineSync.question('May I have your name?: ');
  return answer;
};

export default askName;
