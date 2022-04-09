import readlineSync from 'readline-sync';
import engine from '../index.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const condition = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const guess = readlineSync.question('Your answer: ');
    const numberIsEven = randomNumber % 2 === 0;
    const guessIsEven = guess === 'yes';
    const result = numberIsEven === guessIsEven;
    const error = numberIsEven ? 'yes' : 'no';
    return [result, guess, error];
  };
  engine(question, 3, condition);
};
