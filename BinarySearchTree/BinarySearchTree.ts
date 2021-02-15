import { BSTNode } from "./BSTNode";

export class BinarySearchTree<T = number> {
  private root?: BSTNode<T>;
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
    this.root = this.addNodeR(this.root, data);
  }
  /**
   * addNodeR
   */
  private addNodeR(node: BSTNode<T> | undefined, data: T): BSTNode<T> {
    if (node === undefined) {
      this.size++;
      return new BSTNode(data);
    }
    if (data <= node.data) {
      node.left = this.addNodeR(node.left, data);
    } else {
      node.right = this.addNodeR(node.right, data);
    }
    return node;
  }
  public addNodeNotR(data: T) {
    const newNode = new BSTNode(data);
    if (!this.root) {
      this.size++;
      this.root = newNode;
      return;
    }
    let p: BSTNode<T> | undefined = this.root;
    while (p != undefined) {
      if (data < p.data) {
        if (p.left) {
          p = p.left;
        } else {
          this.size++;
          p.left = newNode;
          return;
        }
      } else if (data > p.data) {
        if (p.right) {
          p = p.right;
        } else {
          this.size++;
          p.right = newNode;
          return;
        }
      } else {
        return;
      }
    }
  }
  /**
   * contains
   */
  public contains(data: T) {
    return this.containsR(this.root, data);
  }
  /**
   * contains
   */
  private containsR(node: BSTNode<T> | undefined, data: T): boolean {
    if (node === undefined) {
      return false;
    }
    if (data > node.data) {
      return this.containsR(node.right, data);
    } else if (data < node.data) {
      return this.containsR(node.left, data);
    } else {
      return true;
    }
  }
}
