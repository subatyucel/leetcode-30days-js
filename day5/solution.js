const map = function (arr, fn) {
  let newArr = [];
  arr.forEach((element, i) => {
    newArr.push(fn(element, i));
  });

  return newArr;
};
