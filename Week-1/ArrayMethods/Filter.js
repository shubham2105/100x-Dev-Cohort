// filter
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let filtervart = num.filter(function (i) {
  return i > 3;
});

console.log(filtervart);

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function fun(i) {
//   if (i % 2 == 0) {
//     return i;
//   }
// }

// let even = input.filter(fun);
// console.log(even);

const ans = input.filter(function (n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log(ans);
