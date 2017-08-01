Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/Ah_Hoehoe_xD/GitHub/ReactNative-Course/CurrencyConverter/node_modules/react-navigation/src/navigators/createNavigator.js';
exports.default = createNavigator;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

function createNavigator(router, routeConfigs, navigatorConfig, navigatorType) {
  return function (NavigationView) {
    var _class, _temp;

    var Navigator = (_temp = _class = function (_React$Component) {
      babelHelpers.inherits(Navigator, _React$Component);

      function Navigator() {
        babelHelpers.classCallCheck(this, Navigator);
        return babelHelpers.possibleConstructorReturn(this, (Navigator.__proto__ || Object.getPrototypeOf(Navigator)).apply(this, arguments));
      }

      babelHelpers.createClass(Navigator, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(NavigationView, babelHelpers.extends({}, this.props, { router: router, __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }));
        }
      }]);
      return Navigator;
    }(_react2.default.Component), _class.router = router, _class.routeConfigs = routeConfigs, _class.navigatorConfig = navigatorConfig, _class.navigatorType = navigatorType, _temp);


    return Navigator;
  };
}