import readlineSync from 'readline-sync';
import engine from '../index.js';
import { getInteger, isPrime } from '../utils.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  const condition = () => {
    const number = getInteger();
    const rightAnswer = isPrime(number) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const guess = readlineSync.question('Your answer: ');
    const result = guess === rightAnswer;
    return [result, guess, rightAnswer];
  };
  engine(question, 3, condition);
}