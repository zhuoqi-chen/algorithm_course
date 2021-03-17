export interface MergerFn {
  (left: number, right: number): number;
}
export class SegmentTree {
  private tree: number[] = [];
  constructor(
    private data: number[],
    private mergerFn: (left: number, right: number) => number
  ) {
    this.buildSegmentTree(0, 0, this.getSize() - 1);
  }
  public getSize() {
    return this.data.length;
  }
  public getTree() {
    return this.tree;
  }
  public query(queryLeft: number, queryRight: number): number {
    if (
      queryLeft < 0 ||
      queryRight >= this.getSize() ||
      queryRight < queryLeft
    ) {
      throw new Error("index is illegal");
    }
    return this.queryR(0, 0, this.getSize() - 1, queryLeft, queryRight);
  }
  private queryR(
    treeIndex: number,
    l: number,
    r: number,
    queryLeft: number,
    queryRight: number
  ): number {
    if (l === queryLeft && r === queryRight) {
      return this.tree[treeIndex];
    }
    const mid = this.midNumber(l, r);
    const leftTreeIndex = this.leftChild(treeIndex);
    const rightTreeIndex = this.rightChild(treeIndex);
    if (queryLeft >= mid + 1) {
      return this.queryR(rightTreeIndex, mid + 1, r, queryLeft, queryRight);
    } else if (queryRight <= mid) {
      return this.queryR(leftTreeIndex, l, mid, queryLeft, queryRight);
    }
    const leftRt = this.queryR(leftTreeIndex, l, mid, queryLeft, mid);
    const rightRt = this.queryR(
      rightTreeIndex,
      mid + 1,
      r,
      mid + 1,
      queryRight
    );
    return this.mergerFn(leftRt, rightRt);
  }
  private midNumber(l: number, r: number) {
    return Math.floor(l + (r - l) / 2);
  }
  private buildSegmentTree(treeIndex: number, l: number, r: number) {
    if (l === r) {
      this.tree[treeIndex] = this.data[l];
      return;
    }
    const leftTreeIndex = this.leftChild(treeIndex);
    const rightTreeIndex = this.rightChild(treeIndex);
    const mid = this.midNumber(l, r);
    this.buildSegmentTree(leftTreeIndex, l, mid);
    this.buildSegmentTree(rightTreeIndex, mid + 1, r);
    this.tree[treeIndex] = this.mergerFn(
      this.tree[leftTreeIndex],
      this.tree[rightTreeIndex]
    );
  }
  private leftChild(index: number) {
    return index * 2 + 1;
  }
  private rightChild(index: number) {
    return index * 2 + 2;
  }
}
