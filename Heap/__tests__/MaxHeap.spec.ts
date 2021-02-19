import heap from "heap";
import { flow } from "lodash";
import { MaxHeap } from "../MaxHeap";
import { getRadomNumberArray } from "../utils";

function generateCompileHeap(input: number[]) {
  const maxHeap = new MaxHeap();
  const maxHeapContrast = new heap<number>((a, b) => b - a);
  input.forEach((item) => {
    maxHeap.add(item);
    maxHeapContrast.insert(item);
  });
  return {
    maxHeap,
    maxHeapContrast,
  };
}
describe("test MaxHeap", () => {
  it("test siftUp function", () => {
    const input = [1, 2, 3, 4, 5, 6, 7];
    const { maxHeap, maxHeapContrast } = flow(
      getRadomNumberArray,
      generateCompileHeap
    )();
    expect(maxHeap.getData()).toEqual(maxHeapContrast.toArray());
  });
  describe("test siftDown function", () => {
    it("empty heap", () => {
      const maxHeap = new MaxHeap();
      const t = () => {
        maxHeap.pop();
      };
      expect(t).toThrow("heap is empty");
    });
    it("test extractMax return value ", () => {
      const { maxHeap, maxHeapContrast } = flow(
        getRadomNumberArray,
        generateCompileHeap
      )();
      expect(maxHeap.pop()).toBe(maxHeapContrast.pop());
      expect(maxHeap.size).toBe(maxHeapContrast.size());
      expect(maxHeap.getData()).toEqual(maxHeapContrast.toArray());
    });
    it("test extractMax return value sort", () => {
      const { maxHeap, maxHeapContrast } = flow(
        getRadomNumberArray,
        generateCompileHeap
      )();
      const count = maxHeapContrast.size();
      const arr: number[] = [];
      const arr2: number[] = [];
      for (let i = 0; i < count; i++) {
        arr.push(maxHeap.pop());
        arr2.push(maxHeapContrast.pop());
      }
      expect(arr).toEqual(arr);
    });
  });
  it("test replace function", () => {
    const { maxHeap, maxHeapContrast } = flow(
      getRadomNumberArray,
      generateCompileHeap
    )();
    expect(maxHeap.replace(3)).toEqual(maxHeapContrast.replace(3));
    expect(maxHeap.getData()).toEqual(maxHeapContrast.toArray());
  });
  it("test heapify function", () => {
    const input = [1, 2, 4, 5, 6, 7];
    const maxHeap = new MaxHeap(input);
    expect(maxHeap.getData()).toEqual([7, 6, 4, 5, 2, 1]);
    expect(maxHeap.pop()).toEqual(7);
  });
});
