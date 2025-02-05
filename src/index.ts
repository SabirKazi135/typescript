const Person: {
  personName: string;
  age: number;
  isStudent: boolean;
  introduce: () => string;
} = {
  personName: "sabir",
  age: 22,
  isStudent: false,

  introduce: function (): string {
    return `My name is ${this.personName} `;
  },
};
