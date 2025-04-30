const timeLimit = function (fn, t) {
  return async function (...args) {
    let timer;
    const limiter = new Promise((_, reject) => {
      timer = setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    try {
      return await Promise.race([limiter, fn(...args)]);
    } finally {
      clearTimeout(timer);
    }
  };
};
