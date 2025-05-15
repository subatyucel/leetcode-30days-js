Array.prototype.groupBy = function (fn) {
  const result = {};

  this.forEach((el) => {
    const key = fn(el);
    Object.keys(result).includes(key)
      ? result[key].push(el)
      : (result[key] = [el]);
  });

  return result;
};
