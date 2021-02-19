import { IQueue } from "../Array/type";
import { MaxHeap } from "../Heap/MaxHeap";
import { MinHeap } from "../Heap/MinHeap";

export class PriorityQueue implements IQueue<number> {
  private heap!: MinHeap<number> | MaxHeap<number>;
  constructor(heapType: "min" | "max" = "min") {
    if (heapType === "min") {
      this.heap = new MinHeap();
    } else if (heapType === "max") {
      this.heap = new MaxHeap();
    }
  }
  public enQueue(data: number) {
    this.heap.add(data);
  }
  public deQueue() {
    return this.heap.pop();
  }
  public getSize() {
    return this.heap.size;
  }
  public isEmpty() {
    return this.heap.size === 0;
  }
  public getFirst() {
    return this.heap.peek();
  }
}
