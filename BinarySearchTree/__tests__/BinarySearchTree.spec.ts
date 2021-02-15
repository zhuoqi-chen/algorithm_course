import { BinarySearchTree } from "../BinarySearchTree";

describe("test BinarySearchTree", () => {
  const bst = new BinarySearchTree();
  it("BinarySearchTree add first node should as root", () => {
    bst.addNode(1);
    expect(bst.getRoot()?.data).toBe(1);
    expect(bst.getSize()).toBe(1);
  });
  it("BinarySearchTree add not first node ", () => {
    bst.addNode(2);
    expect(bst.getRoot()?.data).toBe(1);
    expect(bst.getSize()).toBe(2);
  });
});
