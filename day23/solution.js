Array.prototype.groupBy = function (fn) {
  const result = {};

  this.forEach((el) => {
    const key = fn(el);
    result[key] ? result[key].push(el) : (result[key] = [el]);
  });

  return result;
};
