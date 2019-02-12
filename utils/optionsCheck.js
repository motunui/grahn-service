module.exports = (next, options) => {
  if (typeof next !== 'function' && !options) {
    return next;
  }

  return options;
};
