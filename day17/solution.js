const TimeLimitedCache = function () {};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  let val = false;
  if (Object.hasOwn(this, key) && this[key].exp > Date.now()) val = true;

  const exp = Date.now() + duration;
  this[key] = { value, exp };

  return val;
};

TimeLimitedCache.prototype.get = function (key) {
  if (this[key]?.exp > Date.now()) return this[key]?.value;
  else return -1;
};

TimeLimitedCache.prototype.count = function () {
  const keys = Object.keys(this);
  let count = 0;

  keys.forEach((key) => {
    if (this[key]?.exp > Date.now()) count++;
  });

  return count;
};
