import { MaxHeap } from "../MaxHeap";

describe("test MaxHeap", () => {
  it("test siftUp function", () => {
    const maxHeap = new MaxHeap();
    const input = [1, 2, 3, 4, 5, 6, 7];
    input.forEach((item) => {
      maxHeap.add(item);
    });
    expect(maxHeap.getData()).toEqual([7, 4, 6, 1, 3, 2, 5]);
  });
  describe("test siftDown function", () => {
    it("empty heap", () => {
      const maxHeap = new MaxHeap();
      const t = () => {
        maxHeap.extractMax();
      };
      expect(t).toThrow("heap is empty");
    });
    it("test extractMax return value ", () => {
      const maxHeap = new MaxHeap();
      const input = [1, 2, 3, 4, 5, 6, 7];
      input.forEach((item) => {
        maxHeap.add(item);
      });
      expect(maxHeap.extractMax()).toBe(7);
      expect(maxHeap.size).toBe(6);
      expect(maxHeap.getData()).toEqual([6, 4, 5, 1, 3, 2]);
    });
    it("test extractMax return value sort", () => {
      const maxHeap = new MaxHeap();
      const input = [1, 2, 3, 4, 5, 6, 7];
      input.forEach((item) => {
        maxHeap.add(item);
      });
      const count = input.length;
      const arr: number[] = [];
      for (let i = 0; i < count; i++) {
        arr.push(maxHeap.extractMax());
      }
      expect(arr).toEqual([7, 6, 5, 4, 3, 2, 1]);
    });
  });
});
