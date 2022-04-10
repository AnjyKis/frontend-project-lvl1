import readlineSync from 'readline-sync';
import engine from '../index.js';
import { getInteger } from '../utils.js';

const question = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

export default () => {
  const condition = () => {
    const randomNumber1 = getInteger();
    const randomNumber2 = getInteger();
    const operatorIndex = getInteger(0, 3);
    const operator = operators[operatorIndex];
    console.log(`Question: ${randomNumber1} ${operator} ${randomNumber2}`);
    const guess = Number(readlineSync.question('Your answer: '));
    let rightAnswer;
    switch (operator) {
      case '+':
        rightAnswer = randomNumber1 + randomNumber2;
        break;
      case '-':
        rightAnswer = randomNumber1 - randomNumber2;
        break;
      case '*':
        rightAnswer = randomNumber1 * randomNumber2;
        break;
      default:
        break;
    }
    const result = guess === rightAnswer;
    return [result, guess, rightAnswer];
  };
  engine(question, 3, condition);
};
