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
  private buildSegmentTree(treeIndex: number, l: number, r: number) {
    if (l === r) {
      this.tree[treeIndex] = this.data[l];
      return;
    }
    const leftTreeIndex = this.leftChild(treeIndex);
    const rightTreeIndex = this.rightChild(treeIndex);
    const mid = Math.floor(l + (r - l) / 2);
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
