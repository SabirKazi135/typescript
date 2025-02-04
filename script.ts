class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  private speak() {
    console.log(`${this.name} makes a noise`);
  }
}

const dog = new Animal("Dog");
// console.log(dog.name);
dog.speak();
