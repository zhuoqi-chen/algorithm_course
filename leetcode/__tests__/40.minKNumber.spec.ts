import { findMinKNumber } from "../40.minKNumber";

const caseList = [
  {
    input: {
      arr: [3, 2, 1],
      k: 2,
    },
    output: [1, 2],
  },
  {
    input: {
      arr: [0, 1, 2, 1],
      k: 1,
    },
    output: [0],
  },
  {
    input: {
      arr: [0, 0, 1, 2, 4, 2, 2, 3, 1, 4],
      k: 8,
    },
    output: [0, 0, 1, 1, 2, 2, 2, 3],
  },
];
describe("test findMinKNumber ", () => {
  caseList.forEach((item) => {
    it(`find the min ${item.input.k} number in ${item.input.arr}`, () => {
      expect(findMinKNumber(item.input.arr, item.input.k).sort()).toEqual(
        item.output
      );
    });
  });
});
