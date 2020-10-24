import { ArrayQueue } from "./ArrayQueue";
import { LoopQueue } from "./LoopQueue";
import { IQueue } from "./type";

export function testQueueCostTime(
  queue: IQueue<any>,
  count: number = 10000
): number {
  const startTime = Date.now();
  for (let i = 0; i < count; i++) {
    queue.enQueue(Math.random());
  }
  for (let i = 0; i < count; i++) {
    queue.deQueue();
  }
  const time = (Date.now() - startTime) / 1000;
  return time;
}

console.log("ArrayQueue", testQueueCostTime(new ArrayQueue(), 100000));
console.log("LoopQueue", testQueueCostTime(new LoopQueue(), 100000));
