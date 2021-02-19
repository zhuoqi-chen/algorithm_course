export class MaxHeap<T extends number> {
  private data: Array<T> = [];
  constructor(arr?: T[]) {
    if (arr?.length) {
      this.data = arr;
      for (let i = this.parent(this.size); i >= 0; i--) {
        this.siftDown(i);
      }
    }
  }
  public get size(): number {
    return this.data.length;
  }
  public get isEmpty(): number {
    return this.data.length;
  }
  public getData() {
    return this.data;
  }
  public add(item: T) {
    this.data.push(item);
    this.siftUp(this.size - 1);
  }
  private swap(i: number, j: number) {
    const temp = this.data[j];
    this.data[j] = this.data[i];
    this.data[i] = temp;
  }
  private parent(index: number): number {
    if (index === 0) {
      throw new Error("index-0 doesn't have parent.");
    }
    return Math.floor((index - 1) / 2);
  }
  private leftChild(index: number): number {
    return 2 * index + 1;
  }
  private rightChild(index: number): number {
    return 2 * index + 2;
  }
  private siftUp(index: number) {
    while (index > 0 && this.data[index] > this.data[this.parent(index)]) {
      const parentIndex = this.parent(index);
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
  /**
   * findMax
   */
  public peek() {
    if (this.size === 0) {
      throw new Error("heap is empty");
    }
    return this.data[0];
  }

  /**
   * extractMax
   */
  public pop() {
    const rt = this.peek();
    this.swap(0, this.size - 1);
    this.data.pop();
    this.siftDown(0);
    return rt;
  }

  public siftDown(index: number) {
    while (this.leftChild(index) < this.size) {
      let maxValueIndex = this.leftChild(index);
      const rightChildIndex = this.rightChild(index);
      if (
        rightChildIndex < this.size &&
        this.data[rightChildIndex] > this.data[maxValueIndex]
      ) {
        maxValueIndex = rightChildIndex;
      }
      if (this.data[index] > this.data[maxValueIndex]) {
        break;
      }
      this.swap(index, maxValueIndex);
      index = maxValueIndex;
    }
  }
  /**
   * replace
   */
  public replace(data: T) {
    const rt = this.peek();
    this.data[0] = data;
    this.siftDown(0);
    return rt;
  }
}
