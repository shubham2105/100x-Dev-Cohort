let answer = 0;

for (i = 1; i <= 100; i++) {
  answer = answer + i;
}

console.log(answer);

// printing all the even numbers upto 100 and printing addition of all of them
let evenadd = 0;

for (i = 0; i <= 100; i = i + 2) {
  console.log(i);
  evenadd = evenadd + i;
}
console.log(evenadd);

// similary for odd numbers

let oddAdd = 0;

for (i = 1; i <= 100; i = i + 2) {
  console.log(i);
  oddAdd = oddAdd + i;
}
console.log(oddAdd);
