import { LinkedList } from "./LinkedList";

export class LinkedListStack<T> {
  linkedList!: LinkedList<T>;
  constructor() {
    this.linkedList = new LinkedList();
  }
  public push(item: T) {
    this.linkedList.addFirst(item);
  }
  public pop(): T | undefined {
    const rt = this.linkedList.delete(0);
    return rt && rt.data ? rt.data : undefined;
  }
  /**
   * getSize
   */
  public getSize(): number {
    return this.linkedList.getSize();
  }
  /**
   * getSize
   */
  public isEmpty(): boolean {
    return this.linkedList.isEmpty();
  }
  public getStatus(): string {
    return this.linkedList.getStatus();
  }
}
