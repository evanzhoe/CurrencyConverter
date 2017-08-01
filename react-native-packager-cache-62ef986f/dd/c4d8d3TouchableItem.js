Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = '/Users/Ah_Hoehoe_xD/GitHub/ReactNative-Course/CurrencyConverter/node_modules/react-navigation/src/views/TouchableItem.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var ANDROID_VERSION_LOLLIPOP = 21;

var TouchableItem = (_temp = _class = function (_Component) {
  babelHelpers.inherits(TouchableItem, _Component);

  function TouchableItem() {
    babelHelpers.classCallCheck(this, TouchableItem);
    return babelHelpers.possibleConstructorReturn(this, (TouchableItem.__proto__ || Object.getPrototypeOf(TouchableItem)).apply(this, arguments));
  }

  babelHelpers.createClass(TouchableItem, [{
    key: 'render',
    value: function render() {
      if (_reactNative.Platform.OS === 'android' && _reactNative.Platform.Version >= ANDROID_VERSION_LOLLIPOP) {
        var _props = this.props,
            _style = _props.style,
            rest = babelHelpers.objectWithoutProperties(_props, ['style']);

        return _react2.default.createElement(
          _reactNative.TouchableNativeFeedback,
          babelHelpers.extends({}, rest, {
            style: null,
            background: _reactNative.TouchableNativeFeedback.Ripple(this.props.pressColor || '', this.props.borderless || false),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          }),
          _react2.default.createElement(
            _reactNative.View,
            { style: this.props.style, __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            },
            _react.Children.only(this.props.children)
          )
        );
      }

      return _react2.default.createElement(
        _reactNative.TouchableOpacity,
        babelHelpers.extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }),
        this.props.children
      );
    }
  }]);
  return TouchableItem;
}(_react.Component), _class.defaultProps = {
  borderless: false,
  pressColor: 'rgba(0, 0, 0, .32)'
}, _temp);
exports.default = TouchableItem;