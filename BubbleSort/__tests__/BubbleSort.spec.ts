import { generateNumberArr } from "../../Utils/util";
import { BubbleSort } from "../BubbleSort";

describe("test BubbleSort", () => {
  it("should ", () => {
    const input = generateNumberArr(100);
    expect(BubbleSort.sort(input)).toEqual(input.sort());
  });
});
