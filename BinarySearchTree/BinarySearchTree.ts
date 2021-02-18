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
  /**
   * preOrder
   */
  public preOrder() {
    return this.preOrderR(this.root);
  }
  private preOrderR(node: BSTNode<T> | undefined): T[] {
    if (node === undefined) {
      return [];
    }
    return [
      node.data,
      ...this.preOrderR(node.left),
      ...this.preOrderR(node.right),
    ];
  }
  /**
   * preOrder
   */
  public inOrder() {
    return this.inOrderR(this.root);
  }
  private inOrderR(node: BSTNode<T> | undefined): T[] {
    if (node === undefined) {
      return [];
    }
    return [
      ...this.inOrderR(node.left),
      node.data,
      ...this.inOrderR(node.right),
    ];
  }
  /**
   * postOrder
   */
  public postOrder() {
    return this.postOrderR(this.root);
  }
  private postOrderR(node: BSTNode<T> | undefined): T[] {
    if (node === undefined) {
      return [];
    }
    return [
      ...this.postOrderR(node.left),
      ...this.postOrderR(node.right),
      node.data,
    ];
  }
  /**
   * leverOrder
   */
  public leverOrder() {
    const queue: Array<BSTNode<T>> = [];
    const rt = [];
    if (this.root) {
      queue.push(this.root);
    }
    while (queue.length) {
      const current = queue.shift() as BSTNode<T>;
      rt.push(current.data);
      if (current?.left) {
        queue.push(current.left);
      }
      if (current?.right) {
        queue.push(current.right);
      }
    }
    return rt;
  }
  /**
   * minimum
   */
  public minimum(): T {
    if (!this.root) {
      throw new Error("no root node");
    }
    return this.minimumR(this.root).data;
  }
  private minimumR(node: BSTNode<T>): BSTNode<T> {
    if (node.left) {
      return this.minimumR(node.left);
    } else {
      return node;
    }
  }
  /**
   * maximum
   */
  public maximum(): T {
    if (!this.root) {
      throw new Error("no root node");
    }
    return this.maximumR(this.root).data;
  }
  private maximumR(node: BSTNode<T>): BSTNode<T> {
    if (node.right) {
      return this.maximumR(node.right);
    } else {
      return node;
    }
  }
}
