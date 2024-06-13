const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function filterfunction(n) {
  if (n > 3) {
    return true;
  } else {
    return false;
  }
}
function filterdivby2(n) {
  if (n % 2 == 0 && n > 2) {
    return true;
  } else {
    return false;
  }
}

const ans = input.filter(filterfunction);
console.log(ans);
const div = input.filter(filterdivby2);
console.log(div);
