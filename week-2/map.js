input = [1, 2, 3, 4, 5, 6];

function multiplyby2(n) {
  return n * 2;
}
ans = input.map(multiplyby2);
console.log(ans);

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

const prices = products.map((product) => product.price);
console.log(prices); // Expected output: [1000, 500, 300]
