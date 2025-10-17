import { describe, it, expect } from 'vitest';
import { add, divide, InvalidValueError, multiply, subtract } from './arithmetic';

describe('add', () => {
  // what we would like the world to be like
  it("should add two numbers", () => {
    expect(add(5, 3)).toBe(8);
    expect(add(2, 2)).toBe(4);
  })

  // the cruel reality
  it("should  add two negative numbers", () => {
    expect(add(-2, -2)).toBe(-4);
    expect(add(-2, -5)).toBe(-7);
  })

  it("should read the value as 0 if itsnullish", () => {
    expect(add(2, null)).toBe(2);
    expect(add(2, undefined)).toBe(2);
  })

  it("should throw an error if value is not parsable into a number", () => {
    expect(() => add(false, 2)).toThrow(new InvalidValueError());
    expect(() => add(2, false)).toThrow(new InvalidValueError());
    expect(() => add("carro", 2)).toThrow(new InvalidValueError());
  })
});

describe('subtract', () => {
  it("should subtract a number from other", () => {
    expect(subtract(4, 2)).toBe(2);
  })
});

describe('multiply', () => {
  it("should multiply two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  })
});

describe('divide', () => {
  it("should divide one number by another", () => {
    expect(divide(6, 3)).toBe(2);
  })
});
