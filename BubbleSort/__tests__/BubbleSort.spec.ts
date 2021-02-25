import { generateNumberArr } from "../../Utils/util";
import { BubbleSort } from "../BubbleSort";
const sortFn = (a: number, b: number) => (a - b > 0 ? 1 : -1);
describe("test BubbleSort", () => {
  it("sort", () => {
    const input = generateNumberArr(100);
    const output = input.slice();
    expect(BubbleSort.sort(input)).toEqual(output.sort(sortFn));
  });
  it("sort sortOptimize1", () => {
    const input = generateNumberArr(100);
    const output = input.slice();
    expect(BubbleSort.sortOptimize1(input)).toEqual(output.sort(sortFn));
  });
  it("sort sortOptimize2", () => {
    const input = generateNumberArr(100);
    const output = input.slice();
    expect(BubbleSort.sortOptimize2(input)).toEqual(output.sort(sortFn));
  });
});
