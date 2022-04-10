import readlineSync from 'readline-sync';
import engine from '../index.js';
import { getProgression, getInteger } from '../utils.js';

const question = 'What number is missing in the progression?';

export default () => {
  const condition = () => {
    const start = getInteger();
    const step = getInteger(1, 10);
    const unknownIndex = getInteger(5, 10);
    const collection = getProgression(start, step);
    const rightAnswer = collection[unknownIndex];
    collection[unknownIndex] = '..';
    console.log(`Question: ${collection.join(' ')}`);
    const guess = Number(readlineSync.question('Your answer: '));
    const result = guess === rightAnswer;
    return [result, guess, rightAnswer];
  };

  engine(question, 3, condition);
};
