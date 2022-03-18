// let array = [1, 2, 3, 5, 6, 8, 9]
// let array = [-2, -1]
let array = [-10, -5, 0, 5, 10]

let fun = function (arr) {
  let newArr = arr.map((element) => { return element * element })
  return newArr.sort(function (a, b) { return a - b; })
}

let double = fun(array)
console.log(double)
