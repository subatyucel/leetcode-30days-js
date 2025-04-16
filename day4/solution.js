const createCounter = function (init) {
  let counter = init;

  return {
    increment: function () {
      return ++counter;
    },
    decrement: function () {
      return --counter;
    },
    reset: function () {
      counter = init;
      return counter;
    },
  };
};
