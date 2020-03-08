import readlineSync from 'readline-sync';

export const askName = () => {
    const answer = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${answer}!`)
};