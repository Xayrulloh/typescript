class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: TypeScript Version is ${this.version}`;
  }
}

// class Car{
//   readonly model:string;
//   readonly wheels:number = 4

//   constructor(theModel:string) {
//     this.model = theModel
//   }
// }

class Car {
  readonly wheel: number = 4;
  constructor(readonly model: string) {}
}

class Animal {
  protected voice: string = "";
  public color: string = "black";

  private go() {
    console.log("go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log('component on render');
  }
  info(): string {
    return 'This is info,mnmnknnnnnnn '
  }
}