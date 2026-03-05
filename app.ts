function soma(a: number, b: number): number {
  return a + b;
}

// console.log(soma(1, 1));

const name: string = 'Kyoya';
const age: number = 26;
const single: boolean = false;

// console.log(name, typeof name);
// console.log(age, typeof age);
// console.log(single, typeof single);

const favoriteFoods: string[] = ['Cachorro-quente', 'Vatapá', 'Açaí'];
const favoriteNumbers: number[] = [2, 7, 12];

// favoriteFoods.map((food) => console.log(food, typeof food));
// favoriteNumbers.map((num) => console.log(num, typeof num));

const x: any = { name: 'aa' };
const y: string | undefined = undefined;
const z: string | null = null;

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

interface IUser {
  _id: string;
  name: string;
  age: number;
  email: string;
}

const createUser = (user: IUser) => {
  console.log(user.name);
  console.log(user.email);
};

// createUser({ _id: '1', name: 'Kyoya', age: 26, email: 'kyoya@gmail.com' });
