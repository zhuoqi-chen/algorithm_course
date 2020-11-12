class Node<T> {
  constructor(public data: T | null, public next: Node<T | null> | null) {}
}

export class LinkedList<T> {
  public dummyHead!: Node<T | null>;
  private size!: number;
  constructor() {
    this.dummyHead = new Node(null, null);
    this.size = 0;
  }
  /**
   * getSize
   */
  public getSize(): number {
    return this.size;
  }
  /**
   * add
   */
  public add(index: number, data: T): void {
    this.checkIndex(index);
    let pre = this.dummyHead;
    for (let i = 0; i < index; i++) {
      if (pre.next) {
        pre = pre.next;
      }
    }
    pre.next = new Node(data, pre.next);
    this.size++;
  }
  /**
   * delete
   */
  public delete(index: number) {
    this.checkIndex(index);
    let pre = this.dummyHead;
    for (let i = 0; i < index; i++) {
      if (pre.next) {
        pre = pre.next;
      }
    }
    const rtNode = pre.next;
    if (rtNode) {
      pre.next = rtNode.next;
    }
    if (rtNode) {
      rtNode.next = null;
    }

    return rtNode;
  }
  /**
   * removeElement
   */
  public removeElement<T>(
    head: Node<T> | null,
    value: T
  ): Node<T | null> | null {
    if (head === null) {
      return null;
    }
    head.next = this.removeElement(head.next, value);
    return head.data === value ? head.next : head;
  }
  /**
   * set
   */
  public set(index: number, data: T): void {
    this.checkIndex(index);
    let curr = this.dummyHead.next as Node<T>;
    for (let i = 0; i < index; i++) {
      if (curr.next) {
        curr = curr.next as Node<T>;
      }
    }
    curr.data = data;
  }
  /**
   * addFirst
   */
  public addFirst(data: T): void {
    this.add(0, data);
  }
  /**
   * addLast
   */
  public addLast(data: T): void {
    this.add(this.size, data);
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
    let curr = this.dummyHead.next;
    while (curr) {
      str += `${curr.data} => `;
      curr = curr.next;
    }
    str += "null";
    return str;
  }
  private checkIndex(index: number) {
    if (index < 0 || index > this.size) {
      throw new Error("index is Illegal");
    }
  }
}
