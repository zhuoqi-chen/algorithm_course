import { LSDSort } from "../LSDSort";

describe("test LSDSort", () => {
  it("test string case", () => {
    const input = ["BCA", "CAB", "ACB", "BAC", "ABC", "CBA"];
    const output = ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"];
    expect(LSDSort(input, input[0].length)).toEqual(output);
  });
});
