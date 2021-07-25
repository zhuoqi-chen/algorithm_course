import { CountingSort } from "../CountingSort";

describe("Count sort", () => {
  const cases = [
    {
      input: {
        arr: [3, 2, 1],
        max: 4,
      },
      output: [1, 2, 3],
    },
    {
      input: {
        arr: [3, 3, 3, 2, 2, 1, 10],
        max: 11,
      },
      output: [1, 2, 2, 3, 3, 3, 10],
    },
  ];
  cases.forEach((item) => {
    it(`test ${item.input.arr.toString()}`, () => {
      expect(CountingSort(item.input.arr, item.input.max)).toEqual(item.output);
    });
  });
});
