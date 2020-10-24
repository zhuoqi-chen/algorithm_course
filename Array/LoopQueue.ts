import { IQueue } from "./type";

export class LoopQueue<T> implements IQueue<T> {
  public data: Array<T | undefined>;
  front: number = 0;
  tail: number = 0;
  size: number = 0;
  constructor(public capacity: number = 10) {
    this.data = new Array(capacity + 1) as Array<T | undefined>;
  }
  /**
   * getCapacity
   */
  public getCapacity(): number {
    return this.data.length - 1;
  }
  /**
   * isEmpty
   */
  public isEmpty() {
    return this.front === this.tail;
  }
  /**
   * isEmpty
   */
  public getSize() {
    return this.size;
  }
  public enQueue(item: T) {
    if ((this.tail + 1) % this.data.length === this.front) {
      this.reSize(this.getCapacity() * 2);
    }

    this.data[this.tail] = item;
    this.size++;
    this.tail = (this.tail + 1) % this.data.length;
  }
  public deQueue(): T {
    if (this.isEmpty()) {
      throw new Error("The queue is empty, can not dequeue");
    }

    const rt = this.data[this.front];
    this.data[this.front] = undefined;
    this.front = (this.front + 1) % this.data.length;
    this.size--;
    if (this.size < this.getCapacity() / 4 && this.getCapacity() / 2 != 0) {
      this.reSize(Math.floor(this.getCapacity() / 2));
    }
    return rt as T;
  }
  getFirst() {
    if (this.isEmpty()) {
      throw new Error("The queue is empty.");
    }
    return this.data[this.front] as T;
  }
  /**
   * getStatus
   */
  public getStatus() {
    return `data:${this.data} front:${this.front} tail:${this.tail}`;
  }
  private reSize(capacity: number) {
    const newData = new Array(capacity + 1) as Array<T | undefined>;
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[(i + this.front) % this.data.length];
    }
    this.data = newData;
    this.front = 0;
    this.tail = this.size;
  }
}
// const queue = new LoopQueue();
// console.log(queue.getStatus());
// queue.enQueue(1);
// console.log(queue.getStatus());
// queue.enQueue(2);
// console.log(queue.getStatus());
// queue.enQueue(3);
// console.log(queue.deQueue());
// console.log(queue.getStatus());
// queue.enQueue(4);
// console.log(queue.getStatus());
// queue.enQueue(5);
// console.log(queue.getStatus());
// console.log(queue.deQueue());
// console.log(queue.getStatus());
