import { LinkedListQueue } from "./LinkedListQueue";

const linkedListQueue = new LinkedListQueue();
linkedListQueue.enQueue(1);
linkedListQueue.enQueue(2);
linkedListQueue.enQueue(3);
console.log(linkedListQueue.getStatus());
console.log(linkedListQueue.deQueue());
console.log(linkedListQueue.getStatus());
