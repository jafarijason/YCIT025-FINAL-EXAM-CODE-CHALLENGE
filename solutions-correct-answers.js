// Task1
export function simpleArraySum(arrayInput) {
  // const result = arrayInput.reduce((a, b) => { return a + b; });
  // return result;
  let total = 0;
  for (const item of arrayInput) {
    total += item;
  }
  return total;
  // Task1 solution
}


// Task2
export function calculateTeamScore(arrayInput) {
  const rules = {
    win: 3,
    draw: 1,
    lose: 0
  };
  const product = arrayInput.map((item) => { return rules[item]; })
  return simpleArraySum(product);
}


// Task3
export function findMinMax(arrayInput) {

  let min = Infinity;
  let max = -Infinity;

  arrayInput.forEach((item) => {
    if (item > max) {
      max = item
    }
    if (item < min) {
      min = item;
    }
  })


  return [min, max];
}
