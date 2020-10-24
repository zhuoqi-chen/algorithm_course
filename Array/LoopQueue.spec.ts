import { LoopQueue } from "./LoopQueue";

describe("test LoopQueue", () => {
  let loopQueue: LoopQueue<number>;
  const capacity = 3;
  beforeEach(() => {
    loopQueue = new LoopQueue(capacity);
  });
  it("test empty", () => {
    expect(loopQueue.data).toEqual(new Array(capacity + 1));
  });
  it("test enQueue", () => {
    loopQueue.enQueue(1);
    expect(loopQueue.data).toEqual([1, undefined, undefined, undefined]);
    loopQueue.enQueue(2);
    expect(loopQueue.data).toEqual([1, 2, undefined, undefined]);
    loopQueue.enQueue(3);
    expect(loopQueue.data).toEqual([1, 2, 3, undefined]);
  });
  it("test resize function", () => {
    loopQueue.enQueue(1);
    loopQueue.enQueue(2);
    loopQueue.enQueue(3);
    loopQueue.enQueue(4);
    expect(loopQueue.data).toEqual([
      1,
      2,
      3,
      4,
      undefined,
      undefined,
      undefined,
    ]);
    loopQueue.deQueue();
    loopQueue.deQueue();
    expect(loopQueue.data).toEqual([
      undefined,
      undefined,
      3,
      4,
      undefined,
      undefined,
      undefined,
    ]);
    loopQueue.deQueue();
    expect(loopQueue.data).toEqual([4, undefined, undefined, undefined]);
  });
});
