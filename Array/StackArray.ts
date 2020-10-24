import { MyArray } from "./MyArray";

export class StackArray<T> {
  public array: MyArray<T>;
  constructor(capacity: number = 10) {
    this.array = new MyArray(capacity);
  }
  public push(item: T) {
    this.array.push(item);
  }
  public pop(): T {
    return this.array.deleteLast();
  }
  public peek(): T {
    return this.array.get(this.array.size - 1);
  }
  public getSize(): number {
    return this.array.getSize();
  }
  public getCapacity(): number {
    return this.array.getCapacity();
  }
  public isEmpty(): boolean {
    return this.array.size === 0;
  }
}
