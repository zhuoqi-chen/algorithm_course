import { ArrayQueue } from "./ArrayQueue";

describe("test ArrayQueue", () => {
  let arrayQueue: ArrayQueue<number>;
  const capacity = 3;
  beforeEach(() => {
    arrayQueue = new ArrayQueue(capacity);
  });
  it("test empty", () => {
    expect(arrayQueue.data).toEqual(new Array(capacity));
  });
  it("test enqueue", () => {
    arrayQueue.enQueue(1);
    expect(arrayQueue.data).toEqual([1, undefined, undefined]);
    arrayQueue.enQueue(2);
    expect(arrayQueue.data).toEqual([1, 2, undefined]);
    arrayQueue.enQueue(3);
    expect(arrayQueue.data).toEqual([1, 2, 3]);
  });
  it("test resize", () => {
    arrayQueue.enQueue(1);
    arrayQueue.enQueue(2);
    arrayQueue.enQueue(3);
    arrayQueue.enQueue(4);
    expect(arrayQueue.data).toEqual([1, 2, 3, 4, undefined, undefined]);
    arrayQueue.deQueue();
    expect(arrayQueue.data).toEqual([2, 3, 4, undefined, undefined, undefined]);
    arrayQueue.deQueue();
    arrayQueue.deQueue();
    expect(arrayQueue.data).toEqual([4, undefined, undefined]);
  });
});
