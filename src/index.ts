const arr: number[] = [4, 5, 6, 7, 8, 9];

let sum: number = arr.reduce((total: number, num: number): number => {
  return total + num;
}, 10);

console.log(sum);
