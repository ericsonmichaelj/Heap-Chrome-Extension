elv.populated = function (val) {
  const t = typeof val;
  return elv(val)
    && (t !== 'string' || val.length > 0)
    && (!Array.isArray(val) || val.length > 0)
    && (t !== 'object' || Object.keys(val).length > 0);
};