function returnValue<T>(arr: T[]): T {
  return arr[0];
}

console.log(returnValue<string>(["sabir", "raees"]));
console.log(returnValue<number>([10, 12]));
console.log(returnValue<boolean>([false, true]));
