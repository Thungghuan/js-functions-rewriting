class myArray {
  #array = [] // private
  #resetArray = []
  constructor(...items) {
    for (let item of items) {
      this.#array.push(item)
      this.#resetArray.push(item)
    }
  }
  reset() {
    this.#array = []
    for (let item of this.#resetArray) {
      this.#array.push(item)
    }
    console.log(`the array reset to ${this.#array}\n`)
  }
  getValue() {
    return this.#array
  }

  $reverse() {
    for (let begin = 0, end = this.#array.length - 1; begin <= end; ++begin, --end) {
      let temp = this.#array[begin]
      this.#array[begin] = this.#array[end]
      this.#array[end] = temp
    }
    return this.#array
  }
  $push(...elements) {
    let pushIndex = this.#array.length
    for (let i = 0; i < elements.length; ++i, ++pushIndex) {
      this.#array[pushIndex] = elements[i]
    }
    return pushIndex
  }
  $pop() {
    let popped = this.#array[this.#array.length - 1]
    --this.#array.length
    return popped
  }
  $shift() {
    let shifted = this.#array[0]
    for (let i = 1; i < this.#array.length; ++i) {
      this.#array[i - 1] = this.#array[i]
    }
    --this.#array.length
    return shifted
  }
  $unshift(...elements) {
    let length = this.#array.length + elements.length
    for (let i = length - 1; i >= 0; --i) {
      if (i >= elements.length) {
        this.#array[i] = this.#array[i - elements.length]
      } else {
        this.#array[i] = elements[i]
      }
    }
    return length
  }
}

let arr = new myArray(1, 2, 3, 4, 9)
console.log(arr.getValue())

// Array.prototype.reverse()
console.log("Try method myArray.$reverse()")
console.log(arr.$reverse())
console.log(arr.getValue())
arr.reset()

// Array.prototype.push()
console.log("Try method myArray.$push()")
let total = arr.$push(4, 7, 8)
console.log(arr.getValue())
console.log(total)
arr.reset()

// Array.prototype.pop()
console.log("Try method myArray.$pop()")
console.log(`arr popped ${arr.$pop()}`)
console.log(`arr popped ${arr.$pop()}`)
console.log(arr.getValue())
arr.reset()

// Array.prototype.shift()
console.log("Try method myArray.$shift()")
console.log(`arr shifted ${arr.$shift()}`)
console.log(`arr shifted ${arr.$shift()}`)
console.log(arr.getValue())
arr.reset()

// Array.prototype.unshift()
console.log("Try method myArray.$unshift()")
let count = arr.$unshift(4, 3)
console.log(arr.getValue())
console.log(count)
arr.reset()

console.log(arr.getValue())
