export abstract class IQueue<T> {
  constructor(public capacity?: number) {}
  abstract enQueue(item: T): void;
  abstract deQueue(): T;
  abstract getFirst(): T;
  abstract getSize(): number;
  abstract isEmpty(): boolean;
}
