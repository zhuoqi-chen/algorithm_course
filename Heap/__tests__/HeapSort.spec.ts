import { HeapSort } from "../HeapSort";

describe("test HeapSort", () => {
  it("HeapSort sort", () => {
    const input = [1, 2, 4, 5, 9, 7, 3];
    expect(HeapSort.sort(input)).toEqual([1, 2, 3, 4, 5, 7, 9]);
  });
});
