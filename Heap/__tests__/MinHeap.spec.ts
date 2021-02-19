import { MinHeap } from "../MinHeap";
import heap from "heap";
import { flow } from "lodash";
import { getRadomNumberArray } from "../utils";
function generateCompileHeap(input: number[]) {
  const minHeap = new MinHeap();
  const minHeapContrast = new heap<number>();
  input.forEach((item) => {
    minHeap.add(item);
    minHeapContrast.insert(item);
  });
  return {
    minHeap,
    minHeapContrast,
  };
}

describe("test minHeap", () => {
  it("test siftUp function", () => {
    const input = getRadomNumberArray();
    const { minHeap, minHeapContrast } = generateCompileHeap(input);
    expect(minHeap.getData()).toEqual(minHeapContrast.toArray());
  });
  describe("test siftDown function", () => {
    it("empty heap", () => {
      const input: number[] = [];
      const { minHeap, minHeapContrast: minHeapContrast } = generateCompileHeap(
        input
      );
      expect(minHeap.getData()).toEqual(minHeapContrast.toArray());
      const t = () => {
        minHeap.pop();
      };
      expect(t).toThrow("heap is empty");
    });
    it("test extractMin return value ", () => {
      const { minHeap, minHeapContrast: minHeapContrast } = flow(
        getRadomNumberArray,
        generateCompileHeap
      )();
      expect(minHeap.pop()).toBe(minHeapContrast.pop());
      expect(minHeap.getData()).toEqual(minHeapContrast.toArray());
    });
    it("test extractMin return value sort", () => {
      const input = getRadomNumberArray(20);
      const { minHeap, minHeapContrast } = generateCompileHeap(input);
      const count = input.length;
      const arr: number[] = [];
      const arr2: number[] = [];
      for (let i = 0; i < count; i++) {
        arr.push(minHeap.pop());
        arr2.push(minHeapContrast.pop());
      }
      expect(arr).toEqual(arr2);
    });
  });
  it("test replace function", () => {
    const { minHeap, minHeapContrast } = flow(
      getRadomNumberArray,
      generateCompileHeap
    )();
    expect(minHeap.replace(0)).toEqual(minHeapContrast.replace(0));
    expect(minHeap.getData()).toEqual(minHeapContrast.toArray());
  });
});
