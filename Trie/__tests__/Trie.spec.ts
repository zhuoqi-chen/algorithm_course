import { Trie } from "../Trie";
const words = ["apple", "google"];
describe("test Trie", () => {
  describe("测试循环遍历实现添加", () => {
    const trie = new Trie();
    words.forEach((word) => {
      trie.add(word);
    });
    it("test trie count", () => {
      expect(trie.getSize()).toBe(words.length);
    });
    it("test Trie contains", () => {
      words.forEach((word) => {
        expect(trie.contains(word)).toBe(true);
      });
    });
  });
  describe("测试递归实现添加", () => {
    const trie = new Trie();
    words.forEach((word) => {
      trie.addRecursion(word);
    });
    it("test trie count", () => {
      expect(trie.getSize()).toBe(words.length);
    });
    it("test Trie contains", () => {
      words.forEach((word) => {
        expect(trie.contains(word)).toBe(true);
      });
    });
  });
});
