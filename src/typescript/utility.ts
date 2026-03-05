interface IUser {
  _id: string;
  name: string;
  age: number;
  email: string;
  genre: Genre;
}
type Genre = 'Male' | 'Female';

// Todos os campos se tornam opcionais
const user1: Partial<IUser> = {
  _id: '123',
};
// console.log(user1);

// Omite alguns campos da Interface
const user2: Omit<IUser, 'email'> = {
  _id: '1234',
  age: 1,
  genre: 'Female',
  name: 'kyoya',
};
// console.log(user2);

// Omite alguns campos da Interface
const user3: Pick<IUser, 'name'> = {
  name: 'kyoya',
};
// console.log(user3);

// Omite alguns campos da Interface
const user4: Required<IUser> = {
  _id: '12345',
  age: 1,
  email: 'adada',
  genre: 'Female',
  name: 'kyoya',
};
// console.log(user4);
