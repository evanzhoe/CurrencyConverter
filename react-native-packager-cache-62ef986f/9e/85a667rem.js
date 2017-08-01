Object.defineProperty(exports, "__esModule", {
  value: true
});


var SUFFIX = 'rem';
var DEFAULT_REM = 16;

exports.default = {
  isRem: isRem,
  calc: calc
};

function isRem(str) {
  return str.substr(-SUFFIX.length) === SUFFIX;
}

function calc(str) {
  var rem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_REM;

  var koefStr = str.substr(0, str.length - SUFFIX.length);
  var koef = koefStr === '' ? 1 : parseFloat(koefStr);
  if (isNaN(koef)) {
    throw new Error('Invalid rem value: ' + str);
  }
  return rem * koef;
}