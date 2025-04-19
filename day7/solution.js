const reduce = function (nums, fn, init) {
  if (nums.lenght === 0) return init;

  let accum = init;

  nums.forEach((num) => (accum = fn(accum, num)));

  return accum;
};
