const cancelallbe = function (fn, args, t) {
  const timer = setTimeout(() => fn(...args), t);

  return (cancelFn = () => clearTimeout(timer));
};
