export class MAxHeap<T extends number> {
  data: Array<T> = [];
  public get size(): number {
    return this.data.length;
  }
  public get isEmpty(): number {
    return this.data.length;
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
}
