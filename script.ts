function returnValue<T>(value: T): T {
  return value;
}

console.log(returnValue<string>("sabir"));
console.log(returnValue<number>(10));
console.log(returnValue<boolean>(true));
