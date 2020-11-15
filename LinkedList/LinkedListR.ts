class Node<T> {
  constructor(public data: T | null, public next: Node<T | null> | null) {}
}

export class LinkedListR<T> {
  public head!: Node<T | null> | null;
  private size!: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }
  /**
   * getSize
   */
  public getSize(): number {
    return this.size;
  }
  public add(index: number, data: T) {
    this.checkIndex(index);
    this.head = this.addR(this.head, index, data);
    this.size++;
  }
  public delete(index: number) {
    this.checkIndex(index);
    this.head = this.deleteR(this.head, index);
    this.size--;
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
   * getFirst
   */
  public getFirst() {
    return this.getR(this.head, 0);
  }
  public getLast() {
    return this.getR(this.head, this.size - 1);
  }
  /**
   * deleteFirst
   */
  public deleteFirst() {
    this.delete(0);
  }
  /**
   * deleteFirst
   */
  public deleteLast() {
    this.delete(this.size - 1);
  }
  /**
   * set
   */
  public set(index: number, data: T) {
    this.setR(this.head, index, data);
  }
  /**
   * reverse
   */
  public reverse() {
    let pre = null;
    let curr = this.head;
    while (curr !== null) {
      const next = curr?.next || null;
      if (curr) {
        curr.next = pre;
      }
      pre = curr;
      curr = next;
    }
    this.head = pre;
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
  /**
   * add
   */
  private addR(
    node: Node<T | null> | null,
    index: number,
    data: T
  ): Node<T | null> | null {
    if (index === 0) {
      return new Node(data, node);
    }
    if (node) {
      node.next = this.addR(node?.next || null, index - 1, data);
    }
    return node;
  }
  private deleteR(node: Node<T | null> | null, index: number) {
    if (index === 0) {
      return node?.next || null;
    }
    if (node?.next) {
      node.next = this.deleteR(node.next, index - 1);
    }
    return node;
  }
  private getR(
    node: Node<T | null> | null,
    index: number
  ): Node<T | null> | null {
    if (index === 0) {
      return node;
    }
    if (node?.next) {
      return this.getR(node.next, index - 1);
    }
    return node;
  }
  private setR(node: Node<T | null> | null, index: number, data: T) {
    if (index === 0 && node) {
      node.data = data;
      return;
    }
    this.setR(node?.next || null, index - 1, data);
  }
  private checkIndex(index: number) {
    if (index < 0 || index > this.size) {
      throw new Error("index is Illegal");
    }
  }
}
