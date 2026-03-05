interface IUser {
  _id: string;
  name: string;
  age: number;
  email: string;
  genre: Genre;
}

type Genre = 'Male' | 'Female';

const user1: IUser = {
  _id: '1',
  age: 1,
  name: 'Niyeon',
  email: 'niyeon@gmail.com',
  genre: 'Male',
};

console.log(user1);

const createUser = (user: IUser) => {
  console.log(user.name);
  console.log(user.email);
};

createUser({ _id: '2', name: 'Kyoya', age: 2, email: 'kyoya@gmail.com', genre: 'Male' });
