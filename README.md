# js-functions-rewriting



This project is trying to rewrite the basic JavaScript functions and methods, such as the methods in `Array.prototype`, which will help JavaScript learners (including myself) to use these functions and methods better.



## Function list



Here comes the functions that this project will rewrite.



### Array methods

- [ ] Array.prototype.concat()
- [ ] Array.prototype.filter()
- [ ] Array.prototype.find()
- [ ] Array.prototype.findIndex()
- [ ] Array.prototype.flat()
- [ ] Array.prototype.indexOf()
- [ ] Array.prototype.join()
- [ ] Array.prototype.lastIndexOf()
- [ ] Array.prototype.map()
- [x] Array.prototype.pop()
    > The `pop()` method removes the last element from an array and returns that element. This method changes the length of the array.

    Return value
    > The removed element from the array; `undefined` if the array is empty

    ```js
    const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
    var popped = plants.pop()

    console.log(plants)  // ['broccoli', 'cauliflower', 'cabbage', 'kale']
    console.log(popped)  // 'tomato'
    ```
- [x] Array.prototype.push()
    > The `push()` method adds one or more elements to the end of an array and returns the new length of the arrays.

    Parameters *elements* 
    > The element(s) to add to the end of the array.

    Return value
    > The new `length` property of the object upon which the method was called.

    ```js
    const animals = ['pigs', 'goats', 'sheep']
    const count = animals.push('cows', 'dogs')

    console.log(animals)  // ['pigs', 'goats', 'sheep', 'cows', 'dogs']
    console.log(count)  // 5
    ``` 
- [ ] Array.prototype.reduce()
- [ ] Array.prototype.reduceRight()
- [x] Array.prototype.reverse()
    > The `reverse()` method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

    Return value
    > The reversed array.

    ```js
    const a = [1, 2, 3];
    console.log(a);  // [1, 2, 3]

    a.reverse();
    console.log(a);  // [3, 2, 1]
    ```
- [x] Array.prototype.shift()
    > The `shift()` method removes the first element from an array and returns that removed element. This method changes the length of the array.

    Return value
    > The removed element from the array; `undefined` if the array is empty.

    ```js
    const array = [1, 2, 3]
    const firstElement = array.shift()

    console.log(array)  // [2, 3]
    console.log(firstElement)  // 1
    ```
- [ ] Array.prototype.slice()
- [ ] Array.prototype.some()
- [ ] Array.prototype.sort()
- [ ] Array.prototype.splice()
- [x] Array.prototype.unshift()
    > The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

    Parameters *elements*
    > The element(s) to add to the front of the `arr`

    Return value
    > The new `length` property of the object upon which the method was called.

    ```js
    let arr = [4, 5, 6]
    let length = arr.unshift(1, 2, 3)

    console.log(arr)  // [1, 2, 3, 4, 5, 6]
    console.log(length)  // 6

    arr.unshift(1)
    arr.unshift(2)
    arr.unshift(3)

    console.log(arr)  // [3, 2, 1, 1, 2, 3, 4, 5, 6]
    console.log(length)  // 9
    ```

### String methods

- [ ] String.prototype.replace()
- [ ] String.prototype.replaceAll()
- [ ] String.prototype.slice()
- [ ] String.prototype.split()
- [ ] String.prototype.strike()
- [ ] String.prototype.substr()
- [ ] String.prototype.substring()



