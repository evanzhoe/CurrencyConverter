Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  excludeKeys: excludeKeys,
  isObject: isObject
};

function excludeKeys(obj, keys) {
  keys = Array.isArray(keys) ? keys : keys ? Object.keys(keys) : [];
  return Object.keys(obj).reduce(function (res, key) {
    if (keys.indexOf(key) === -1) {
      res[key] = obj[key];
    }
    return res;
  }, {});
}

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}