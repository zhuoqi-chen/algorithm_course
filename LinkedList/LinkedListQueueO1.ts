class Node<T> {
  constructor(public data?: T, public next?: Node<T>) {}
}

export class LinkedListTailO1<T> {
  private head: Node<T> | undefined = undefined;
  private tail: Node<T> | undefined = undefined;
  private size: number = 0;
  constructor() {}
  /**
   * getSize
   */
  public getSize(): number {
    return this.size;
  }
  public enQueue(item: T) {
    if (this.tail === undefined) {
      this.tail = new Node(item);
      this.head = this.tail;
    } else {
      const newTail = new Node(item);
      this.tail.next = newTail;
      this.tail = this.tail.next;
    }
    this.size++;
  }
  public deQueue(): T | undefined {
    if (this.size <= 0) {
      throw new Error("this Queue is empty");
    }
    const rt = this.head;
    this.head = this.head ? this.head.next : undefined;
    if (rt) {
      rt.next = undefined;
    }
    if (this.head === undefined) {
      this.tail = undefined;
    }

    this.size--;
    return rt && rt.data ? rt.data : undefined;
  }
  /**
   * isEmpty
   */
  public isEmpty(): boolean {
    return this.size === 0;
  }
  /**
   * getStatus
   */
  public getStatus(): string {
    let str = "";
    let curr = this.head;
    while (curr) {
      str += `${curr.data} => `;
      curr = curr.next;
    }
    str += "null";
    return str;
  }
}
