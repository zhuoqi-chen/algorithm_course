import { LinkedList } from "./LinkedList";

export class LinkedListQueue<T> {
  linkedList!: LinkedList<T>;
  constructor() {
    this.linkedList = new LinkedList();
  }
  enQueue(item: T) {
    this.linkedList.addFirst(item);
  }
  deQueue(): T | undefined {
    if (this.linkedList.isEmpty()) {
      throw new Error("queue is empty,cant deQueue");
    }
    const rt = this.linkedList.delete(this.linkedList.getSize() - 1);
    return rt && rt.data ? rt.data : undefined;
  }
  getStatus() {
    return this.linkedList.getStatus();
  }
}
