const behavior = {
  enableFalse: false,
  enableNaN: false,
  enableNull: true,
  enableUndefined: true,
};


const elv = function (val) {
  return (!behavior.enableUndefined || typeof val !== 'undefined')
    && (!behavior.enableNull || val !== null)
    && (!behavior.enableFalse || val !== false)
    && (!behavior.enableNaN || !Number.isNaN(val));
};

elv.populated = function (val) {
  const t = typeof val;
  return elv(val)
    && (t !== 'string' || val.length > 0)
    && (!Array.isArray(val) || val.length > 0)
    && (t !== 'object' || Object.keys(val).length > 0);
};