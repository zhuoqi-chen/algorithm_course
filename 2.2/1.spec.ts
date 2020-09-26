import { findIndex } from "./1";
class Student {
  constructor(public name: string) {}
  public equals(student?: Student): boolean {
    if (student === undefined) {
      return false;
    }
    if (student === this) {
      return true;
    }
    if (student instanceof Student && this.name === student.name) {
      return true;
    }
    return false;
  }
}

describe("2.2", () => {
  it("test string", () => {
    const data = ["12", "34", "53", "23"];
    expect(findIndex(data, data[3])).toBe(3);
  });
  it("test number", () => {
    const data = [12, 34, 53, 23];
    expect(findIndex(data, data[3])).toBe(3);
  });
  it("test object", () => {
    const data = [new Student("czq"), new Student("ty")];
    expect(findIndex(data, new Student("czq"))).toBe(0);
  });
});
