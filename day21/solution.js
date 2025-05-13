const chunk = function (arr, size) {
  const newArr = [];

  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    newArr.push(chunk);
  }

  return newArr;
};
