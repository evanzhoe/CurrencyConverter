Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/Ah_Hoehoe_xD/GitHub/ReactNative-Course/CurrencyConverter/node_modules/react-navigation/src/views/Header/HeaderTitle.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var AnimatedText = _reactNative.Animated.Text;

var HeaderTitle = function HeaderTitle(_ref) {
  var style = _ref.style,
      rest = babelHelpers.objectWithoutProperties(_ref, ['style']);
  return _react2.default.createElement(AnimatedText, babelHelpers.extends({
    numberOfLines: 1
  }, rest, {
    style: [styles.title, style],
    accessibilityTraits: 'header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }));
};

var styles = _reactNative.StyleSheet.create({
  title: {
    fontSize: _reactNative.Platform.OS === 'ios' ? 17 : 20,
    fontWeight: _reactNative.Platform.OS === 'ios' ? '600' : '500',
    color: 'rgba(0, 0, 0, .9)',
    textAlign: _reactNative.Platform.OS === 'ios' ? 'center' : 'left',
    marginHorizontal: 16
  }
});

exports.default = HeaderTitle;