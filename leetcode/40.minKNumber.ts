import { PriorityQueue } from "../PriorityQueue/PriorityQueue";

/**
 * https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
 * 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 * 示例 1:
 * 输入：arr = [3,2,1], k = 2
 * 输出：[1,2] 或者 [2,1]
 */
export function findMinKNumber1(arr: number[], k: number) {
  const priorityQueue = new PriorityQueue();
  arr.forEach((item) => priorityQueue.enQueue(item));
  const rt: number[] = [];
  for (let i = 0; i < k; i++) {
    rt.push(priorityQueue.deQueue());
  }
  return rt;
}

export function findMinKNumber(arr: number[], k: number) {
  const priorityQueue = new PriorityQueue("max");
  for (let i = 0; i < k; i++) {
    priorityQueue.enQueue(arr[i]);
  }
  for (let i = k; i < arr.length; i++) {
    if (!priorityQueue.isEmpty() && arr[i] < priorityQueue.getFirst()) {
      priorityQueue.deQueue();
      priorityQueue.enQueue(arr[i]);
    }
  }
  const rt: number[] = [];
  for (let i = 0; i < k; i++) {
    rt.push(priorityQueue.deQueue());
  }
  return rt;
}
