// removes duplicates from an array
const removeDupes = (arr, by) => [...new Map(arr.map((item) => [item[by], item])).values()]

// Compares array with another array and removes and items that already exist in the array
const compareFilterArr = (compareArr, compareWithArr, by) => compareArr.filter((u) => !compareWithArr.map((item) => item[by]).includes(u[by]))

// Generates a random key
const randomId = () => "_" + Math.random().toString(36).substr(2, 9)

// Moves an array item to any location in the array
const arraymove = (arr, fromIndex, toIndex) => {
  var element = arr[fromIndex]
  arr.splice(fromIndex, 1)
  arr.splice(toIndex, 0, element)
}

// Adds comma to a number
const addComma = (num) => num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
