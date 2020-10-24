import { MyArray } from "./MyArray";
import { IQueue } from "./type";

export class ArrayQueue<T> extends MyArray<T> implements IQueue<T> {
  constructor(public capacity: number = 10) {
    super(capacity);
  }
  public enQueue(item: T) {
    return this.push(item);
  }
  public deQueue(): T {
    return this.unshift();
  }
  public getFirst(): T {
    return this.getFirst();
  }
}
