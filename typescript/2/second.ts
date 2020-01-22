interface Second {
  a: boolean
  b: string
  c: number
  d: any

  calculate(initial: string): number;
}

class SecondImplementation implements Second {
}

const inst = new SecondImplementation();

console.log(inst.calculate(''));
