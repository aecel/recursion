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

