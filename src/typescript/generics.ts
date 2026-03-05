const primeiro = <T>(arr: T[]): T | undefined => arr[0];

console.log(primeiro([1, 2, 3]));
console.log(primeiro(['a', 'b', 'c']));
