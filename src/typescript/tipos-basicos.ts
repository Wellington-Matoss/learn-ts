const name: string = 'Kyoya';
const age: number = 26;
const single: boolean = false;

// console.log(name, typeof name);
// console.log(age, typeof age);
// console.log(single, typeof single);

function soma(a: number, b: number): number {
  return a + b;
}

console.log(soma(1, 1));

const favoriteFoods: string[] = ['Cachorro-quente', 'Vatapá', 'Açaí'];
const favoriteNumbers: number[] = [2, 7, 12];

// favoriteFoods.map((food) => console.log(food, typeof food));
// favoriteNumbers.map((num) => console.log(num, typeof num));

const y: null | undefined = undefined;

console.log(y, typeof y);
