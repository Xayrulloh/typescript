interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: { 
    width: 800,
    height: 600
  },
  color: '#FFFF'
}

const rect2: Rect = {
  id: '12345',
  size: { 
    width: 300,
    height: 300
  }
}

rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{}


interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '123',
  size: { 
    width: 300,
    height: 300
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date
  }
}

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: 'lfdasjk',
  jdfksa: 'fdsalfk'
}

