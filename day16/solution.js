const timeLimit = function (fn, t) {
  return async function (...args) {
    const limiter = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    return Promise.race([limiter, fn(...args)]);
  };
};
