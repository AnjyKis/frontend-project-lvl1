import readlineSync from 'readline-sync';
import engine from '../index.js';
import { grandCommonDivisor, getInteger } from '../utils.js';

const question = 'Find the greatest common divisor of given numbers.';

export default () => {
  const condition = () => {
    const randomNumber1 = getInteger();
    const randomNumber2 = getInteger();
    const grandDivisor = grandCommonDivisor(randomNumber1, randomNumber2);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const guess = Number(readlineSync.question('Your answer: '));
    const result = grandDivisor === guess;
    return [result, guess, grandDivisor];
  };

  engine(question, 3, condition);
};
