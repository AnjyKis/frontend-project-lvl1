import cli from './cli.js';

export default (question, rounds, condition) => {
  const name = cli();
  console.log(question);
  for (let i = 0; i < rounds; i += 1) {
    const expression = condition();
    const [answer, guess, error] = expression;
    if (answer) {
      console.log('Correct!');
    } else {
      console.log(`'${guess}' is wrong answer ;(. Correct answer was '${error}'. \nLet's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
