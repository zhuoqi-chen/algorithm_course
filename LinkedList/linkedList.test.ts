import { LinkedList } from "./LinkedList";

const linkedList = new LinkedList();

linkedList.addFirst(1);
linkedList.addFirst(2);
linkedList.addFirst(3);
linkedList.addFirst(4);
console.log(linkedList.getStatus());

const linkedList2 = new LinkedList();

linkedList2.addLast(1);
linkedList2.addLast(2);
linkedList2.addLast(3);
linkedList2.addLast(4);
console.log(linkedList2.getStatus());

const linkedList3 = new LinkedList();
linkedList3.addFirst(1);
linkedList3.addFirst(2);
linkedList3.addFirst(3);
linkedList3.addFirst(4);
linkedList3.add(2, 555);
console.log(linkedList3.getStatus());

const linkedList4 = new LinkedList();
linkedList4.addLast(1);
linkedList4.addLast(2);
linkedList4.addLast(3);
linkedList4.addLast(4);
linkedList4.set(1, 222);
console.log(linkedList4.getStatus());
console.log("test case 5");
const linkedList5 = new LinkedList();
linkedList5.addLast(1);
linkedList5.addLast(2);
linkedList5.addLast(3);
console.log(linkedList5.getStatus());
linkedList5.delete(1);
console.log(linkedList5.getStatus());
