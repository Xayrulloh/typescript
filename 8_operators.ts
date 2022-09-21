interface Person {
  name: string;
  age: number;
}

type PersonKey = keyof Person;

let key: PersonKey = "name";

type User = {
  _id: number,
  name: string
  email: string
  createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

let u1: UserKeysNoMeta = 'name'
