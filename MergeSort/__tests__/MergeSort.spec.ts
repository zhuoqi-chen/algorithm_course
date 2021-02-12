import { MergeSort } from "../MergeSort";

describe("test mergeSort", () => {
  const mr = new MergeSort();
  it("test sort function", () => {
    const input = [7, 29, 28, 79, 36, 54, 33, 23, 4, 100];
    mr.sort(input);
    expect(input).toEqual([4, 7, 23, 28, 29, 33, 36, 54, 79, 100]);
  });
});
