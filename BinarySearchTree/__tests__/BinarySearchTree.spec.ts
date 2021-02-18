import { BinarySearchTree } from "../BinarySearchTree";

describe("test BinarySearchTree add not", () => {
  const bst = new BinarySearchTree();
  it("add first node should as root", () => {
    bst.addNode(1);
    expect(bst.getRoot()?.data).toBe(1);
    expect(bst.getSize()).toBe(1);
  });
  it("add not first node ", () => {
    bst.addNode(2);
    expect(bst.getRoot()?.data).toBe(1);
    expect(bst.getSize()).toBe(2);
  });
});

describe("test BinarySearchTree addNodeNotR", () => {
  const bst = new BinarySearchTree();
  it("add first node should as root", () => {
    bst.addNodeNotR(1);
    expect(bst.getRoot()?.data).toBe(1);
    expect(bst.getSize()).toBe(1);
  });
  it("add not first node ", () => {
    bst.addNodeNotR(2);
    expect(bst.getRoot()?.data).toBe(1);
    expect(bst.getSize()).toBe(2);
  });
});
describe("test BinarySearchTree contains", () => {
  const bst = new BinarySearchTree();
  bst.addNode(1);
  expect(bst.contains(1)).toBeTruthy();
  expect(bst.contains(2)).toBeFalsy();
  bst.addNode(2);
  expect(bst.contains(2)).toBeTruthy();
});
describe("test BinarySearchTree Order", () => {
  const input = [5, 3, 6, 8, 4, 2];
  const bst = new BinarySearchTree();
  input.forEach((item) => bst.addNode(item));
  /////////////////
  //      5      //
  //    /   \    //
  //   3    6    //
  //  / \    \   //
  // 2  4     8  //
  /////////////////

  it("preOrder", () => {
    expect(bst.preOrder()).toEqual([5, 3, 2, 4, 6, 8]);
  });
  it("preOrder", () => {
    expect(bst.inOrder()).toEqual([2, 3, 4, 5, 6, 8]);
  });
  it("postOrder", () => {
    expect(bst.postOrder()).toEqual([2, 4, 3, 8, 6, 5]);
  });
  it("leverOrder", () => {
    expect(bst.leverOrder()).toEqual([5, 3, 6, 2, 4, 8]);
  });
});
describe("test BinarySearchTree minimum & maximum", () => {
  it("only root node", () => {
    const input = [5];
    const bst = new BinarySearchTree();
    input.forEach((item) => bst.addNode(item));
    expect(bst.minimum().data).toBe(5);
    expect(bst.maximum().data).toBe(5);
  });
  it("only have right node", () => {
    const input = [5, 8];
    const bst = new BinarySearchTree();
    input.forEach((item) => bst.addNode(item));
    expect(bst.minimum().data).toBe(5);
    expect(bst.maximum().data).toBe(8);
  });
  it("complex tree", () => {
    const input = [5, 3, 6, 4, 7];
    const bst = new BinarySearchTree();
    input.forEach((item) => bst.addNode(item));
    /////////////////
    //      5      //
    //    /   \    //
    //   3    6    //
    //    \    \   //
    //    4     7  //
    /////////////////
    expect(bst.minimum().data).toBe(3);
    expect(bst.maximum().data).toBe(7);
  });
});
describe("test BinarySearchTree removeMinimum", () => {
  it("only root node", () => {
    const input = [5];
    const bst = new BinarySearchTree();
    input.forEach((item) => bst.addNode(item));
    expect(bst.removeMinimum().data).toBe(5);
    expect(bst.getSize()).toBe(0);
  });
  it("only have right node", () => {
    const input = [5, 8];
    const bst = new BinarySearchTree();
    input.forEach((item) => bst.addNode(item));
    expect(bst.removeMinimum().data).toBe(5);
    expect(bst.getSize()).toBe(1);
    expect(bst.preOrder()).toEqual([8]);
  });
  it("complex tree", () => {
    const input = [5, 3, 6, 4, 7];
    const bst = new BinarySearchTree();
    input.forEach((item) => bst.addNode(item));
    /////////////////
    //      5      //
    //    /   \    //
    //   3    6    //
    //    \    \   //
    //    4     7  //
    /////////////////
    expect(bst.removeMinimum().data).toBe(3);
    /////////////////
    //      5      //
    //    /   \    //
    //   4    6    //
    //         \   //
    //         7   //
    /////////////////
    expect(bst.preOrder()).toEqual([5, 4, 6, 7]);
  });
});
describe("test BinarySearchTree removeMaximum", () => {
  it("only root node", () => {
    const input = [5];
    const bst = new BinarySearchTree();
    input.forEach((item) => bst.addNode(item));
    expect(bst.removeMaximum().data).toBe(5);
    expect(bst.getSize()).toBe(0);
  });
  it("only have right node", () => {
    const input = [5, 8];
    const bst = new BinarySearchTree();
    input.forEach((item) => bst.addNode(item));
    expect(bst.removeMaximum().data).toBe(8);
    expect(bst.getSize()).toBe(1);
    expect(bst.preOrder()).toEqual([5]);
  });
  it("complex tree", () => {
    const input = [5, 3, 4, 8, 7];
    const bst = new BinarySearchTree();
    input.forEach((item) => bst.addNode(item));
    /////////////////
    //      5      //
    //    /   \    //
    //   3    8    //
    //    \  /     //
    //    4 7      //
    /////////////////
    expect(bst.removeMaximum().data).toBe(8);
    /////////////////
    //      5      //
    //    /   \    //
    //   3    7    //
    //    \        //
    //    4        //
    /////////////////
    expect(bst.preOrder()).toEqual([5, 3, 4, 7]);
  });
});
