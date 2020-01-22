function simpleFunction(x: number): number {
  return x * 2;
}

type simpleFunctionType = (number) => number;

interface Third {
  x: simpleFunctionType;
  y: simpleFunctionType[];
}

function findProjectorWithSmallesResult(from: simpleFunctionType[]): simpleFunctionType {
}
