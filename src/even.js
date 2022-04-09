import readlineSync from 'readline-sync';
import engine from './index.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const f = () => {
    const condition = () => {

        const randomNumber = Math.floor(Math.random() * 100); 
        console.log(`Question: ${randomNumber}`);
        const guess = readlineSync.question('Your answer: ');
        const numberIsEven = randomNumber % 2 === 0; 
        const guessIsEven = guess === 'yes'; 
        const result = numberIsEven === guessIsEven; 
        const error = numberIsEven ? 'yes' : 'no'
        return [result, guess, error];
    };

    engine(question, 3, condition);
}

f()
// import cli from './cli.js';

// const check = (guess, answer) => {
//   if (guess !== 'yes' && guess !== 'no') {
//     return false;
//   }
//   const guessIsEven = guess === 'yes';
//   const result = answer === guessIsEven;
//   return result;
// };

// export default () => {
//   const name = cli();
//   console.log('Answer "yes" if the number is even, otherwise answer "no".');
//   for (let i = 0; i < 3; i += 1) {
//     const value = Math.floor(Math.random() * 100);
//     const isEven = value % 2 === 0;
//     console.log(`Question: ${value}`);
//     const guess = readlineSync.question('Your answer: ');
//     const isRight = check(guess, isEven);
//     const result = isRight ? 'Correct!' : `'${guess}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}`;
//     console.log(result);
//     if (!isRight) {
//       return;
//     }
//   }
//   console.log(`Congratulations, ${name}!`);
// };