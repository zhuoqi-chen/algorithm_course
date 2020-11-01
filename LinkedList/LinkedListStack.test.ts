import { LinkedListStack } from "./LinkedListStack";

const linkedListStack = new LinkedListStack();
linkedListStack.push(1);
linkedListStack.push(2);
linkedListStack.push(3);
console.log(linkedListStack.getStatus());
console.log(linkedListStack.pop());
console.log(linkedListStack.getStatus());
