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
