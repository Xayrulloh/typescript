const cars: string[] = ["BMW", "AUDI"];
const cars2: Array<string> = ["AUDI", "BMW"];

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 2000);
});

promise.then((data) => {
  console.log(data.toUpperCase());
});

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
  return Object.assign({}, a, b);
}

// const merged = mergeObjects('aaa', 'bbb')
// console.log(merged.age);

interface ILength {
  length: number;
}

function withCount<T extends ILength>(value: T): { value: T; count: string } {
  return { value, count: "lalala " + value.length };
}

let person = { age: 19, name: "John" };
function getObjectValue<T extends object, R extends keyof T>(object: T, key: R) {
  return object[key];
}

// console.log(getObjectValue(person, 'age'));
// console.log(getObjectValue(person, 'name'));
// console.log(getObjectValue(person, 'job'));

class Collection<T extends string | number | boolean>{
  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item);
  }
  remove(item: T) {
    this._items = this.items.filter(el => el !== item)
  }
  get items(): T[] {
    return this._items
  }
}

const strings = new Collection<string>(['I', "am", "Strings"])
strings.add('!')
strings.remove('am')
console.log(strings.items);

// const obj = new Collection([{a: 1}, {a: 2}, {a: 3}])
// obj.remove({a:1})
// console.log(obj.items);

