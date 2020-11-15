import { LinkedListR } from "./LinkedListR";

const linkedListR = new LinkedListR();
linkedListR.addLast(1);
linkedListR.addLast(2);
linkedListR.addFirst(3);
console.log(linkedListR.getStatus());

console.log("test case 2");
const linkedListR2 = new LinkedListR();
linkedListR2.addLast(1);
linkedListR2.addLast(2);
linkedListR2.addFirst(3);
console.log(linkedListR2.getStatus());
linkedListR2.deleteLast();
console.log(linkedListR2.getStatus());
linkedListR2.deleteLast();
console.log(linkedListR2.getStatus());

console.log("test case 3");
const linkedListR3 = new LinkedListR();
linkedListR3.addLast(1);
linkedListR3.addLast(2);
linkedListR3.addFirst(3);
console.log(linkedListR3.getStatus());
console.log(linkedListR3.getFirst());
console.log(linkedListR3.getLast());

console.log("test case 4");
const linkedListR4 = new LinkedListR();
linkedListR4.addLast(1);
linkedListR4.addLast(2);
linkedListR4.addLast(3);
console.log(linkedListR4.getStatus());
linkedListR4.set(0, 111);
linkedListR4.set(1, 222);
linkedListR4.set(2, 333);
console.log(linkedListR4.getStatus());
