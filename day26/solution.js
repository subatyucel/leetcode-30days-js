const flat = function (arr, n) {
  function helper(currentArray, currentDepth) {
    let result = [];

    for (let item of currentArray) {
      if (Array.isArray(item) && currentDepth < n) {
        result.push(...helper(item, currentDepth + 1));
      } else {
        result.push(item);
      }
    }
    return result;
  }

  return helper(arr, 0);
};
