import { findIndex } from "./1";

describe("2.2", () => {
  it("test find index", () => {
    const data = [12, 34, 53, 23, 23, 34, 235, 342345, 3, 16, 43, 7, 43];
    expect(findIndex(data, data[3])).toBe(3);
  });
});
