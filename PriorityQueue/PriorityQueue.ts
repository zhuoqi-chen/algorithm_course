import { IQueue } from "../Array/type";
import { MinHeap } from "../Heap/MinHeap";

export class PriorityQueue implements IQueue<number> {
  private maxHeap = new MinHeap();
  public enQueue(data: number) {
    this.maxHeap.add(data);
  }
  public deQueue() {
    return this.maxHeap.extractMin();
  }
  public getSize() {
    return this.maxHeap.size;
  }
  public isEmpty() {
    return this.maxHeap.size === 0;
  }
  public getFirst() {
    return this.maxHeap.findMin();
  }
}
