import readlineSync from 'readline-sync';
import engine from '../index.js';

const question = 'Find the greatest common divisor of given numbers.';
const grandCommonDivisor = (num1, num2) => {
  let operand1 = num1;
  let operand2 = num2;
  while (operand1 !== 0 && operand2 !== 0) {
    if (operand1 > operand2) {
      operand1 = operand1 % operand2;
    } else {
      operand2 = operand2 % operand1;
    }
  }
  return operand1 + operand2;
};

export default () => {
  const condition = () => {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    const grandDivisor = grandCommonDivisor(randomNumber1, randomNumber2);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const guess = Number(readlineSync.question('Your answer: '));
    const result = grandDivisor === guess;
    return [result, guess, grandDivisor];
  };

  engine(question, 3, condition);
};
