import { generateNumberArr } from "../../Utils/util";
import { ShellSort } from "../ShellSort";
const sortFn = (a: number, b: number) => (a - b > 0 ? 1 : -1);
describe("test ShellSort", () => {
  it("sort", () => {
    const input = generateNumberArr(100);
    const output = input.slice();
    expect(ShellSort.sort(input)).toEqual(output.sort(sortFn));
  });
});
