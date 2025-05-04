const promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    if (functions.length === 0) resolve([]);

    let results = [];
    let resolvedCount = 0;

    functions.forEach((fn, i) => {
      fn()
        .then((result) => {
          results[i] = result;
          resolvedCount++;
          if (resolvedCount === functions.length) resolve(results);
        })
        .catch((e) => reject(e));
    });
  });
};
