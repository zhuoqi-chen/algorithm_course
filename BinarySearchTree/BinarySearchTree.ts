import { BSTNode } from "./BSTNode";

export class BinarySearchTree<T = number> {
  private root: BSTNode<T> | null = null;
  private size: number = 0;
  /**
   * getRoot
   */
  public getRoot() {
    return this.root;
  }
  /**
   * getRoot
   */
  public getSize() {
    return this.size;
  }
  /**
   * addNode
   */
  public addNode(data: T) {
    if (this.root === null) {
      this.root = new BSTNode(data);
      this.size++;
      return;
    }
    this.addNodeR(this.root, data);
  }
  /**
   * addNodeR
   */
  private addNodeR(node: BSTNode<T>, data: T) {
    if (node.data === data) {
      return;
    }
    if (data <= node.data) {
      if (node.left) {
        this.addNodeR(node.left, data);
      } else {
        node.left = new BSTNode(data);
        this.size++;
      }
    } else {
      if (node.right) {
        this.addNodeR(node.right, data);
      } else {
        node.right = new BSTNode(data);
        this.size++;
      }
    }
  }
}
