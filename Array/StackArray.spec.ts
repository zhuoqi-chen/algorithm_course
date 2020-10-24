import { StackArray } from "./StackArray";

describe("test StackArray", () => {
  it("test push", () => {
    const stackArray = new StackArray();
    stackArray.push(1);
    expect(stackArray.array.data.filter(Boolean)).toEqual([1]);
    stackArray.push(2);
    stackArray.push(3);
    expect(stackArray.array.data.filter(Boolean)).toEqual([1, 2, 3]);
    stackArray.pop();
    expect(stackArray.array.data.filter(Boolean)).toEqual([1, 2]);
  });
  it("test isEmpty", () => {
    const stackArray = new StackArray();
    expect(stackArray.isEmpty()).toBe(true);
    stackArray.push(1);
    expect(stackArray.isEmpty()).toBe(false);
  });
});
