const TimeLimitedCache = function () {};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  let val = false;
  if (Object.hasOwn(this, key)) {
    if (this[key].exp > Date.now()) {
      val = true;
    }
  }

  const exp = Date.now() + duration;
  this[key] = { value, exp };

  return val;
};

TimeLimitedCache.prototype.get = function (key) {
  if (this[key].exp > Date.now()) return this[key].value;
  else return -1;
};

TimeLimitedCache.prototype.count = function () {
  const keys = Object.keys(this);
  let count = 0;

  keys.forEach((key) => {
    if (this[key].exp > Date.now()) count++;
  });

  return count;
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
