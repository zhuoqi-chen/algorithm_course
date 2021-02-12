import { QuickSort } from "../QuickSort";
import { QuickSortThreeWays } from "../QuickSortThreeWays";
import { QuickSortTwoWays } from "../QuickSortTwoWays";
import { generateNumberArr } from "../util";
describe("test QuickSort", () => {
  it("QuickSort single way", () => {
    const input = generateNumberArr(30);
    expect(QuickSort.sort(input)).toEqual(input.sort());
  });
  it("QuickSort two ways", () => {
    const input = generateNumberArr(30);
    expect(QuickSortTwoWays.sort(input)).toEqual(input.sort());
  });
  it("QuickSort three ways", () => {
    const input = generateNumberArr(30);
    expect(QuickSortThreeWays.sort(input)).toEqual(input.sort());
  });
});
