type UserId = (number | string)[];

function formatUserId(array: UserId): string[] {
  return array.map((id) => `User ID:${id}`);
}

console.log(filterNumbers([101, "XYZ123", 202, "ABC456"])); 
// Output: [101, 202]
