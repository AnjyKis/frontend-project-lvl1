export const getInteger = (min = 0, max = 100) => {
  const result = Math.floor(Math.random() * (max - min) + min);
  return result;
};

export const grandCommonDivisor = (num1, num2) => {
  let operand1 = num1;
  let operand2 = num2;
  while (operand1 !== 0 && operand2 !== 0) {
    if (operand1 > operand2) {
      operand1 %= operand2;
    } else {
      operand2 %= operand1;
    }
  }
  return operand1 + operand2;
};

export const getProgression = (start, step) => {
  const result = [];
  const length = 10;
  let count = 0;
  for (let i = start; count < length; i += step) {
    count += 1;
    result.push(i);
  }
  return result;
};
