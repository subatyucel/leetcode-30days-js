const compactObject = function (obj) {
  if (Array.isArray(obj)) {
    return obj.map(compactObject).filter((val) => Boolean(val));
  } else if (obj !== null && typeof obj === "object") {
    const newObj = {};
    for (const [key, value] of Object.entries(obj)) {
      const compacted = compactObject(value);
      if (Boolean(compacted)) {
        newObj[key] = compacted;
      }
    }
    return newObj;
  } else {
    return obj;
  }
};
