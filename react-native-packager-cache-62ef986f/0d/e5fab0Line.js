Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class,
    _temp2,
    _initialiseProps,
    _jsxFileName = '/Users/Ah_Hoehoe_xD/GitHub/ReactNative-Course/CurrencyConverter/node_modules/react-native-svg/elements/Line.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = babelHelpers.interopRequireDefault(_createReactNativeComponentClass);

var _attributes = require('../lib/attributes');

var _Shape2 = require('./Shape');

var _Shape3 = babelHelpers.interopRequireDefault(_Shape2);

var _props = require('../lib/props');

var Line = (_temp2 = _class = function (_Shape) {
    babelHelpers.inherits(Line, _Shape);

    function Line() {
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, Line);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Line.__proto__ || Object.getPrototypeOf(Line)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(Line, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;
            return _react2.default.createElement(RNSVGLine, babelHelpers.extends({
                ref: function ref(ele) {
                    _this2.root = ele;
                }
            }, this.extractProps(props), {
                x1: props.x1.toString(),
                y1: props.y1.toString(),
                x2: props.x2.toString(),
                y2: props.y2.toString(),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }));
        }
    }]);
    return Line;
}(_Shape3.default), _class.displayName = 'Line', _class.propTypes = babelHelpers.extends({}, _props.pathProps, {
    x1: _props.numberProp.isRequired,
    x2: _props.numberProp.isRequired,
    y1: _props.numberProp.isRequired,
    y2: _props.numberProp.isRequired
}), _class.defaultProps = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setNativeProps = function () {
        var _root;

        (_root = _this3.root).setNativeProps.apply(_root, arguments);
    };
}, _temp2);


var RNSVGLine = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.LineAttributes,
    uiViewClassName: 'RNSVGLine'
});

exports.default = Line;