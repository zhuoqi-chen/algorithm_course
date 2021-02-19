import { findMinKNumber } from "../40.minKNumber";

const caseList = [];
it("test findMinKNumber ", () => {
  expect(findMinKNumber([3, 2, 1], 2)).toEqual([1, 2]);
  expect(findMinKNumber([0, 1, 2, 1], 1)).toEqual([0]);
});
