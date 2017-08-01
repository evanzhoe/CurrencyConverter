Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _rem = require('./replacers/rem');

var _rem2 = babelHelpers.interopRequireDefault(_rem);

var _vars = require('./replacers/vars');

var _vars2 = babelHelpers.interopRequireDefault(_vars);

var _percent = require('./replacers/percent');

var _percent2 = babelHelpers.interopRequireDefault(_percent);

var _operation = require('./replacers/operation');

var _operation2 = babelHelpers.interopRequireDefault(_operation);

var _scale = require('./replacers/scale');

var _scale2 = babelHelpers.interopRequireDefault(_scale);

var Value = function () {
  function Value(value, prop) {
    var varsArr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var stack = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    babelHelpers.classCallCheck(this, Value);

    this.value = value;

    this.outValue = null;
    this.prop = prop;
    this.varsArr = varsArr;
    this.stack = stack;
  }

  babelHelpers.createClass(Value, [{
    key: 'calc',
    value: function calc() {
      if (typeof this.value === 'function') {
        this.value = this.value();
      }

      if (typeof this.value === 'string') {
        this.calcString();
      } else {
        this.proxyValue();
      }

      if (this.isFinal()) {
        this.applyScale();
      }

      return this.outValue;
    }
  }, {
    key: 'calcString',
    value: function calcString() {
      var actions = [this.tryCalcOperation, this.tryCalcVar, this.tryCalcPercent, this.tryCalcRem];
      var value = this.tryActions(actions, this.value);
      if (value !== null) {
        this.outValue = value;
      } else {
        this.proxyValue();
      }
    }
  }, {
    key: 'tryActions',
    value: function tryActions(actions, str) {
      for (var i = 0; i < actions.length; i++) {
        var val = actions[i].call(this, str);
        if (val !== null) {
          return val;
        }
      }
      return null;
    }
  }, {
    key: 'tryCalcOperation',
    value: function tryCalcOperation(str) {
      var opInfo = _operation2.default.isOperation(str);
      if (!opInfo) {
        return null;
      }

      var operands = ['v1', 'v2'];
      for (var i = 0; i < operands.length; i++) {
        var operand = operands[i];
        var operandValue = this.calcOperandValue(opInfo[operand]);
        if (operandValue !== null) {
          opInfo[operand] = operandValue;
        } else {
          return null;
        }
      }
      return _operation2.default.exec(opInfo);
    }
  }, {
    key: 'calcOperandValue',
    value: function calcOperandValue(str) {
      var actions = [this.tryCalcVar, this.tryCalcPercent, this.tryCalcRem, this.tryCalcFloat];
      return this.tryActions(actions, str);
    }
  }, {
    key: 'tryCalcVar',
    value: function tryCalcVar(str) {
      if (_vars2.default.isVar(str)) {
        var val = _vars2.default.calc(str, this.varsArr);
        if (this.stack.indexOf(str) >= 0) {
          throw new Error('Cyclic reference: ' + this.stack.concat([str]).join(' -> '));
        }
        var stack = this.stack.concat([str]);

        return new Value(val, str, this.varsArr, stack).calc();
      } else {
        return null;
      }
    }
  }, {
    key: 'tryCalcPercent',
    value: function tryCalcPercent(str) {
      if (_percent2.default.isPercent(str)) {
        return _percent2.default.calc(str, this.prop);
      }
      return null;
    }
  }, {
    key: 'tryCalcRem',
    value: function tryCalcRem(str) {
      if (_rem2.default.isRem(str)) {
        var remValue = _vars2.default.get('$rem', this.varsArr);
        return _rem2.default.calc(str, remValue);
      } else {
        return null;
      }
    }
  }, {
    key: 'tryCalcFloat',
    value: function tryCalcFloat(str) {
      var val = parseFloat(str);
      return !isNaN(val) ? val : null;
    }
  }, {
    key: 'isFinal',
    value: function isFinal() {
      return !this.stack.length;
    }
  }, {
    key: 'proxyValue',
    value: function proxyValue() {
      this.outValue = this.value;
    }
  }, {
    key: 'applyScale',
    value: function applyScale() {
      if (_vars2.default.isVar(this.prop)) {
        return;
      }
      var scaleFactor = _vars2.default.get('$scale', this.varsArr) || 1;
      if (scaleFactor === 1) {
        return;
      }
      if (_scale2.default.isScalable(this.outValue, this.prop)) {
        this.outValue = _scale2.default.calc(this.outValue, scaleFactor);
      }
    }
  }]);
  return Value;
}();

exports.default = Value;