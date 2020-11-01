class Node<T> {
  constructor(public data?: T, public next?: Node<T>) {}
}

export class LinkedList<T> {
  private dummyHead!: Node<T>;
  private size!: number;
  constructor() {
    this.dummyHead = new Node();
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
  public delete(index: number): Node<T> | undefined {
    this.checkIndex(index);
    let pre: Node<T> | undefined = this.dummyHead;
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
      rtNode.next = undefined;
    }

    return rtNode;
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
