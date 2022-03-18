// let coins = [5, 7, 1, 1, 2, 3, 22]
// let coins = [1, 1, 1, 1, 1]
let coins = [1, 5, 1, 1, 1, 10, 15, 20, 100]
// let coins = []

coins.sort(function (a, b) {
  return a - b;
})

if (coins.length == 0) {
  console.log(0)
  return
}

let min = 1
for (i = 0; i < coins.length && coins[i] <= min; i++) { 
  min = min + coins[i]
}

console.log(min)