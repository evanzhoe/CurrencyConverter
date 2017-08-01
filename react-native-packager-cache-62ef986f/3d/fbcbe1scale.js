Object.defineProperty(exports, "__esModule", {
  value: true
});


var SCALABLE_PROPS = ['width', 'height', 'margin', 'padding', 'fontsize', 'radius'];

exports.default = {
  isScalable: isScalable,
  calc: calc
};

function isScalable(value, prop) {
  return typeof value === 'number' && isScalableProp(prop);
}

function calc(value, scaleFactor) {
  if (typeof value !== 'number') {
    throw new Error('Invalid value for scale: ' + value);
  }
  if (typeof scaleFactor !== 'number') {
    throw new Error('Invalid scaleFactor for scale: ' + scaleFactor);
  }
  return value * scaleFactor;
}

function isScalableProp(prop) {
  if (typeof prop !== 'string') {
    return false;
  }
  prop = prop.toLowerCase();
  return SCALABLE_PROPS.some(function (p) {
    return prop.indexOf(p) >= 0;
  });
}