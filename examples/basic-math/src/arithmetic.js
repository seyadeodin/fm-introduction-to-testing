
export class InvalidValueError extends  Error {
  constructor(message) {
    super()
    this.message = message ?? "Valores inválidos";
  };
}

export const add = (a, b) => {
  a = parseFloat(a ?? 0)
  b = parseFloat(b ?? 0)

  if( isNaN(a) || isNaN(b)) {
    throw new InvalidValueError()
  }

  return a + b;
};

export const subtract = (a, b) => {
  return a - b;
};

export const multiply = (a, b) => {
  return a * b;
};

export const divide = (a, b) => {
  return a / b;
};
