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
  public minimum() {
    if (!this.root) {
      throw new Error("no root node");
    }
    return this.minimumR(this.root);
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
  public maximum() {
    if (!this.root) {
      throw new Error("no root node");
    }
    return this.maximumR(this.root);
  }
  private maximumR(node: BSTNode<T>): BSTNode<T> {
    if (node.right) {
      return this.maximumR(node.right);
    } else {
      return node;
    }
  }
  /**
   * removeMinimum
   */
  public removeMinimum() {
    if (!this.root) {
      throw new Error("no root node");
    }
    const rt = this.minimum();
    this.root = this.removeMinimumR(this.root);
    return rt;
  }
  /**
   * removeMinimumR
   */
  public removeMinimumR(node: BSTNode<T>): BSTNode<T> | undefined {
    if (node.left) {
      node.left = this.removeMinimumR(node.left);
      return node;
    } else {
      const rightNode = node.right;
      node.right = undefined;
      this.size--;
      return rightNode;
    }
  }
  /**
   * removeMaximum
   */
  public removeMaximum() {
    if (!this.root) {
      throw new Error("no root node");
    }
    const rt = this.maximum();
    this.root = this.removeMaximumR(this.root);
    return rt;
  }
  /**
   * removeMaximumR
   */
  public removeMaximumR(node: BSTNode<T>): BSTNode<T> | undefined {
    if (node.right) {
      node.right = this.removeMaximumR(node.right);
      return node;
    } else {
      const leftNode = node.left;
      node.left = undefined;
      this.size--;
      return leftNode;
    }
  }
  /**
   * findNode
   */
  public findNode(data: T) {
    if (!this.root) {
      throw new Error("no root node");
    }
    return this.findNodeR(this.root, data);
  }
  /**
   * findNodeR
   */
  public findNodeR(node: BSTNode<T>, data: T): BSTNode<T> | undefined {
    if (node.data === data) {
      return node;
    } else if (data > node.data) {
      if (node.right) {
        return this.findNodeR(node.right, data);
      } else {
        return undefined;
      }
    } else {
      if (node.left) {
        return this.findNodeR(node.left, data);
      } else {
        return undefined;
      }
    }
  }
  /**
   * removeNode
   */
  public removeNode(data: T) {
    if (!this.root) {
      throw new Error("no root node");
    }
    const node = this.findNode(data);
    if (!node) {
      throw new Error("node not find");
    }
    this.root = this.removeNodeR(this.root, data);
    return node;
  }
  /**
   * removeNode
   */
  public removeNodeR(
    node: BSTNode<T> | undefined,
    data: T
  ): BSTNode<T> | undefined {
    if (node === undefined) {
      return undefined;
    }
    if (data > node.data) {
      node.right = this.removeNodeR(node.right, data);
      return node;
    } else if (data < node.data) {
      node.left = this.removeNodeR(node.left, data);
      return node;
    } else {
      if (!node.right) {
        const left = node.left;
        node.left = undefined;
        this.size--;
        return left;
      }
      if (!node.left) {
        const right = node.right;
        node.right = undefined;
        this.size--;
        return right;
      }
      const miniNode = this.minimumR(node.right);
      const right = this.removeMinimumR(node.right);
      miniNode.right = right;
      miniNode.left = node.left;
      node.right = undefined;
      node.left = undefined;
      return miniNode;
    }
  }
}
