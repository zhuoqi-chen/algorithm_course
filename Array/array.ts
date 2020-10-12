class MyArray<T> {
  data!: T[];
  size: number = 0;
  constructor(capacity: number = 10) {
    this.data = new Array(capacity);
  }
  public push(value: T) {
    this.add(this.size, value);
  }
  public shift(value: T) {
    this.add(0, value);
  }
  public add(index: number, value: T) {
    // if (this.size === this.data.length) {
    //   throw new Error("array is full");
    // }
    if (index < 0 || index > this.size) {
      throw new Error("add Failed, Require index >= 0 and index< size");
    }
    if (this.size >= this.data.length) {
      this.resize(this.data.length * 2);
    }
    for (let i = this.size; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = value;
    this.size++;
  }
  public delete(index: number): T {
    if (index < 0 || index >= this.size) {
      throw new Error("delete Failed, Require index >= 0 and index< size");
    }
    const rt = this.data[index];
    for (let i = index; i < this.size; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.size--;
    const halfSize = Math.floor(this.data.length / 2);
    if (this.size < halfSize) {
      this.resize(halfSize);
    }
    return rt;
  }
  private resize(newCapacity: number) {
    const newData = new Array(newCapacity);
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
  }
}

const myArray = new MyArray<number>();
myArray.push(1);
myArray.push(2);
myArray.shift(0);
console.log(myArray.delete(0));
console.log(myArray);
