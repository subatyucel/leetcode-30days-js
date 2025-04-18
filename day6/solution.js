const filter = function (arr, fn) {
  const newArr = [];

  arr.forEach((el, i) => {
    if (fn(el, i)) newArr.push(el);
  });

  return newArr;
};
