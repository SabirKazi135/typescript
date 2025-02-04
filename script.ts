type UserId = (number | string)[];

function filterString(array: UserId): string[] {
  return array.filter((str): str is string => typeof str === "string");
}

console.log(filterString([101, "XYZ123", 202, "ABC456"]));
