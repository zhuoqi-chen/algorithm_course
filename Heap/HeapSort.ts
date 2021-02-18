import { MaxHeap } from "./MaxHeap";

export class HeapSort {
  static sort(arr: number[]) {
    const maxHeap = new MaxHeap();

    arr.forEach((item) => maxHeap.add(item));
    for (let i = arr.length - 1; i >= 0; i--) {
      arr[i] = maxHeap.extractMax();
    }
    return arr;
  }
}
