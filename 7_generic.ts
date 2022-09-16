const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5];
const arrayOfStrings: Array<string> = ['1', '2', '3', '4', '5']

function reverse<A>(array: [A]):A[] {
  return array.reverse();
}