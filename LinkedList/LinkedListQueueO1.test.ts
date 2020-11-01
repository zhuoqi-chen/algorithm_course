import { LinkedListTailO1 } from "./LinkedListQueueO1";

const linkedListTailO1 = new LinkedListTailO1();
linkedListTailO1.enQueue(1);
linkedListTailO1.enQueue(2);
linkedListTailO1.enQueue(3);
console.log(linkedListTailO1.getStatus());
console.log(linkedListTailO1.deQueue());
console.log(linkedListTailO1.getStatus());
linkedListTailO1.enQueue(4);
linkedListTailO1.enQueue(5);
linkedListTailO1.enQueue(6);
linkedListTailO1.enQueue(7);
console.log(linkedListTailO1.deQueue());
console.log(linkedListTailO1.getStatus());

console.log("test case 2");
const linkedListTailO12 = new LinkedListTailO1();
linkedListTailO12.enQueue(1);
console.log(linkedListTailO12.getStatus());
console.log(linkedListTailO12.deQueue());
console.log(linkedListTailO12.getStatus());
