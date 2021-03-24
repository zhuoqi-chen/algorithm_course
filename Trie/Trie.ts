class TrieNode {
  public next = new Map<string, TrieNode>();
  constructor(public isWord: boolean = false) {}
}

export class Trie {
  root: TrieNode = new TrieNode();
  size: number = 0;
  public getSize() {
    return this.size;
  }
  /**
   * 遍历添加单词
   * @param word
   */
  public add(word: string) {
    let curr = this.root;
    word
      .trim()
      .split("")
      .forEach((char) => {
        if (!curr.next.has(char)) {
          curr.next.set(char, new TrieNode());
        }
        curr = curr.next.get(char) as TrieNode;
      });
    if (!curr.isWord) {
      curr.isWord = true;
      this.size++;
    }
  }
  /**
   * 递归添加单词
   * @param words
   */
  public addRecursion(words: string) {
    this.addR(this.root, words.trim().split(""), 0);
  }
  private addR(node: TrieNode, words: string[], index: number) {
    if (index === words.length) {
      if (!node.isWord) {
        node.isWord = true;
        this.size++;
      }
      return;
    }

    const char = words[index];
    if (!node.next.has(char)) {
      node.next.set(char, new TrieNode());
    }
    this.addR(node.next.get(char) as TrieNode, words, index + 1);
  }
  public contains(word: string): boolean {
    let curr = this.root;
    for (const char of word.trim().split("")) {
      const nextCharNode = curr.next.get(char);
      if (nextCharNode) {
        curr = nextCharNode;
      } else {
        return false;
      }
    }
    return curr.isWord;
  }
}
