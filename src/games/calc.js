import readlineSync from 'readline-sync';
import engine from '../index.js';

const question = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const randomOperator = () => Math.floor(Math.random() * (3 - 0) + 0);

export default () => {
    const condition = () => {
        const randomNumber1 = Math.floor(Math.random() * 100);
        const randomNumber2 = Math.floor(Math.random() * 100);
        const operatorIndex = randomOperator();
        const operator = operators[operatorIndex];
        console.log(`Question: ${randomNumber1} ${operator} ${randomNumber2}`);
        const guess = Number(readlineSync.question('Your answer: '));
        let rightAnswer;
        switch(operator) {
            case '+':
                rightAnswer = randomNumber1 + randomNumber2;
                break;
            case '-':
                rightAnswer = randomNumber1 - randomNumber2;
                break;
            case '*':
                rightAnswer = randomNumber1 * randomNumber2;
                break;
        }
        const result = guess === rightAnswer;
        return [result, guess, rightAnswer];
    };
    engine(question, 3, condition);
};