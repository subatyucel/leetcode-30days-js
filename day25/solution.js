const join = function (arr1, arr2) {
  const map = new Map();
  arr1.forEach((el) => map.set(el.id, el));

  arr2.forEach((el) => {
    map.has(el.id)
      ? map.set(el.id, { ...map.get(el.id), ...el })
      : map.set(el.id, el);
  });

  return Array.from(map.values()).sort((a, b) => a.id - b.id);
};
