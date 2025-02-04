function fullName(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "sabir",
  lastName: "kazi",
};

fullName(p);

