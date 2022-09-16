const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = "Hello Typescript";

const numberArray: number[] = [1, 2, 3, 4, 5];
const numberArray2: Array<number> = [1, 2, 3, 4, 5];

const wordArray: string[] = ["a", "b", "c", "d", "e", "f"];

const contact: [string, number] = ["Xayrulloh", 900088213];

let variable: any = 42;
variable = "lalala";

function sayMyName(name: string): void {
  console.log(name);
}
// sayMyName('Xayrulloh');

function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {}
}

type Login = string;

const login: Login = "admin";

type ID = string | number;
const id: ID = 34;

type someType = string | null | undefined;