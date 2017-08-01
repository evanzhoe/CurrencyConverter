Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    width = _Dimensions$get.width,
    height = _Dimensions$get.height;

var V_PROPS = ['height', 'top', 'bottom', 'vertical'];
var H_PROPS = ['width', 'left', 'right', 'horizontal'];
var SUFFIX = '%';
var invalidPropMsg = ['Name of variable or property with percent value should contain ', '(' + V_PROPS.concat(H_PROPS).join() + ') to define base for percent calculation'].join('');

exports.default = {
  isPercent: isPercent,
  calc: calc
};

function isPercent(str) {
  return str.charAt(str.length - 1) === SUFFIX;
}

function calc(str, prop) {
  var percent = parseInt(str.substring(0, str.length - 1), 10);
  var base = isVertical(prop) ? height : width;
  return base * percent / 100;
}

function isVertical(prop) {
  prop = prop.toLowerCase();
  if (V_PROPS.some(function (p) {
    return prop.indexOf(p) >= 0;
  })) {
    return true;
  }
  if (H_PROPS.some(function (p) {
    return prop.indexOf(p) >= 0;
  })) {
    return false;
  }
  throw new Error(invalidPropMsg);
}