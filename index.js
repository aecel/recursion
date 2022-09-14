const sumRange = (n) => {
  if (n <= 0 || Number.isInteger(n) == false) {
    return "N/A"
  } else if (n == 1) {
    return 1
  } else {
    return n + sumRange(n - 1)
  }
}

const power = (base, exponent) => {
  if (
    base < 0 ||
    Number.isInteger(base) == false ||
    exponent < 0 ||
    Number.isInteger(exponent) == false
  ) {
    return "N/A"
  } else if (exponent === 0) {
    return 1
  } else {
    return base * power(base, exponent - 1)
  }
}

const factorial = (n) => {
  if (n <= 0 || Number.isInteger(n) == false) {
    return "N/A"
  } else if (n == 1) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

// Write a function called all which accepts an array and a callback
// and returns true if every value in the array returns true when passed as parameter to the callback function
const all = (array, callback) => {
  if (Array.isArray(array) == false || typeof callback !== "function") {
    return "N/A"
  } else {
    if (array.length === 0) return true

    if (callback(array[0])) {
      array.shift() // remove first element from array
      return all(array, callback)
    } else {
      return false
    }
  }
}

const productOfArray = (array) => {
  if (Array.isArray(array) == false) {
    return "N/A"
  } else if (array.length === 0) {
    return 1
  } else {
    return array.shift() * productOfArray(array)
  }
}

// Write a function called contains that searches for a value in a nested object.
// It returns true if the object contains that value.

const contains = (obj, value) => {
  for (const key in obj) {
    if (typeof obj[key] == "object") {
      return contains(obj[key], value)
    } else if (obj[key] == value) {
      return true
    }
  }
  return false
}

// Given a multi-dimensional integer array, return the total number of integers stored inside this array
const totalIntegers = (something) => {
  let total = 0
  for (item of something) {
    if (Array.isArray(item)) {
      total = total + totalIntegers(item)
    } else if (Number.isInteger(item)) {
      total++
    }
  }
  return total
}

// Write a function that sums squares of numbers in list that may contain more lists
const SumSquares = (array) => {
  let total = 0
  for (item of array) {
    if (Array.isArray(item)) {
      total = total + SumSquares(item)
    } else if (Number.isInteger(item)) {
      total = total + item * item
    }
  }
  return total
}

// The function should return an array containing repetitions of the number argument.
// For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
const replicate = (times, num) => {
  if (
    times <= 0 ||
    Number.isInteger(times) == false ||
    num < 0 ||
    Number.isInteger(num) == false
  ) {
    return []
  } else {
    return [num].concat(replicate(times - 1, num))
  }
}

const fibs = (n) => {
  let array = []
  if (n <= 0 || Number.isInteger(n) == false) {
    return "N/A"
  } else if (n == 1) {
    array = [0]
  } else {
    array = [0, 1]
    for (let i = 2; i < n; i++) {
      const nextSum = array[i - 1] + array[i - 2]
      array.push(nextSum)
    }
  }
  return array
}

const fibsRec = (n) => {
  let array = []
  if (n <= 0 || Number.isInteger(n) == false) {
    return "N/A"
  } else if (n == 1) {
    return [0]
  } else if (n == 2) {
    return [0, 1]
  } else {
    array = fibsRec(n - 1)
    const length = array.length
    const nextSum = array[length - 2] + array[length - 1]
    array.push(nextSum)
    return array
  }
}

const splitArray = (array) => {
  const halfLength = array.length / 2
  const firstArray = array.slice(0, halfLength)
  const secondArray = array.slice(halfLength)

  return [firstArray, secondArray]
}

const sort = (a, b) => {
  if (a >= b) {
    return [b, a]
  } else {
    return [a, b]
  }
}

const min = (a, b) => {
  if (a >= b) {
    return b
  } else {
    return a
  }
}

const sortArrays = (array1, array2) => {
  totalLength = array1.length + array2.length
  returnThisArray = []
  //[][][] [][]

  //compare first items then push it on returnThisArray
  //the bigger item gets compared to the next number in the other array
  for (let i = 0; i < totalLength; i++) {
    const minNum = min(array1[0], array2[0])
    if (array1.length == 0) {
      console.log("array1 empty")
      for (x of array2) {
        returnThisArray.push(x)
        array2.shift()
      }
    } else if (array2.length == 0) {
      console.log("array2 empty")
      for (x of array1) {
        returnThisArray.push(x)
        array1.shift()
      }
    } else if (array1[0] != undefined && array1[0] == minNum) {
      returnThisArray.push(minNum)
      array1.shift()
    } else if (array2[0] != undefined && array2[0] == minNum) {
      returnThisArray.push(minNum)
      array2.shift()
    }
  }

  return returnThisArray
}

const mergeSort = (array) => {
  // base case
  // when you split them, check if it's a number (not an array), sort them and merge

  // if it's an array when you split, split into two
  let returnThisArray = []

  splitArray(array)
  for (x of array) {
    if (Array.isArray(x) == false) {
      // sort and merge
      if (array.length == 2) {
        return sort(array[0], array[1])
      }
    } else {
      // mergeSort(x)
    }
  }
}

console.log(sortArrays([5, 6], [3, 4]))
