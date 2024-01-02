// making a bsaic calculator using callback functions
function calculator(n1, n2, arithmeticOperator) {
  const answer = arithmeticOperator(n1, n2);
  console.log(answer);
  return answer;
}

function add(n1, n2) {
  return n1 + n2;
}
function sub(n1, n2) {
  return n1 - n2;
}
function mul(n1, n2) {
  return n1 * n2;
}
calculator(20, 4, mul);
