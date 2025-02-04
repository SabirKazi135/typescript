type UserId = (number | string)[];

function filterEvenAndUppercase(array: UserId): {
  numbers: number[];
  strings: string[];
} {
  return {
    numbers: array.filter((num): num is number => {
      return typeof num === "number" && num % 2 === 0;
    }),
    strings: array
      .filter((str): str is string => {
        return typeof str === "string";
      })
      .map((str) => str.toUpperCase()),
  };
}

console.log(
  filterEvenAndUppercase([101, "hello", 202, "world", 404, "typescript"])
);
