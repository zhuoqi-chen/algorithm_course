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
