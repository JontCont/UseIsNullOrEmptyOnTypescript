export {};
declare global {
  interface String {
    ToNumber(): number;
  }

  interface StringConstructor {
    IsNullOrEmpty(value: string | undefined | null): boolean;
  }

  interface Number {
    ToString(): string;
    IsOdd(): boolean;
  }
}

String.prototype.ToNumber = function (): number {
  return Number(this);
};

Number.prototype.ToString = function (): string {
  return String(this);
};

Number.prototype.IsOdd = function (): boolean {
  if (typeof this !== "number") {
    // This is a type guard
    throw new Error("The value is not a number");
  }
  return this % 2 !== 0;
};

String.IsNullOrEmpty = function (value: string | undefined | null): boolean {
  return value === null || value === undefined || value === "";
};

const a: number = 2;
console.log(a.ToString());
console.log(a.IsOdd() ? "Odd" : "Even");
console.log(String.IsNullOrEmpty(a.ToString()) ? "Empty" : "Not Empty");
console.log(String.IsNullOrEmpty("") ? "Empty" : "Not Empty");
console.log(String.IsNullOrEmpty(undefined) ? "Empty" : "Not Empty");
