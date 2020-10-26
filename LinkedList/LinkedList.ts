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

const linkedList = new LinkedList();

linkedList.addFirst(1);
linkedList.addFirst(2);
linkedList.addFirst(3);
linkedList.addFirst(4);
console.log(linkedList.getStatus());

const linkedList2 = new LinkedList();

linkedList2.addLast(1);
linkedList2.addLast(2);
linkedList2.addLast(3);
linkedList2.addLast(4);
console.log(linkedList2.getStatus());

const linkedList3 = new LinkedList();
linkedList3.addFirst(1);
linkedList3.addFirst(2);
linkedList3.addFirst(3);
linkedList3.addFirst(4);
linkedList3.add(2, 555);
console.log(linkedList3.getStatus());

const linkedList4 = new LinkedList();
linkedList4.addLast(1);
linkedList4.addLast(2);
linkedList4.addLast(3);
linkedList4.addLast(4);
linkedList4.set(1, 222);
console.log(linkedList4.getStatus());
