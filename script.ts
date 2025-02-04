class Container<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const stringContainer = new Container<string>("Hello");
const numberContainer = new Container<number>(42);
const booleanContainer = new Container<boolean>(true);

console.log(stringContainer.getValue()); // Output: "Hello"
console.log(numberContainer.getValue()); // Output: 42
console.log(booleanContainer.getValue()); // Output: true
