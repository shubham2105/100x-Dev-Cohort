//Array and its methods

const arr = [1, 2, 3, 4, 5];

function pushElements(arr, ...val) {
  console.log("Original Array:", arr);
  arr.push(...val);
  console.log("After push", arr);
}
pushElements(arr, 7, 8);

function popElemsnts(val) {
  console.log("ORiginalArray:", arr);
  arr.pop(...val);
  console.log("After popping elements", arr);
}

popElemsnts(arr, 7, 8);
