Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _CardStackStyleInterpolator = require('./CardStackStyleInterpolator');

var _CardStackStyleInterpolator2 = babelHelpers.interopRequireDefault(_CardStackStyleInterpolator);

var IOSTransitionSpec = {
  duration: 500,
  easing: _reactNative.Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
  timing: _reactNative.Animated.timing
};

var SlideFromRightIOS = {
  transitionSpec: IOSTransitionSpec,
  screenInterpolator: _CardStackStyleInterpolator2.default.forHorizontal,
  containerStyle: {
    backgroundColor: '#000'
  }
};

var ModalSlideFromBottomIOS = {
  transitionSpec: IOSTransitionSpec,
  screenInterpolator: _CardStackStyleInterpolator2.default.forVertical,
  containerStyle: {
    backgroundColor: '#000'
  }
};

var FadeInFromBottomAndroid = {
  transitionSpec: {
    duration: 350,
    easing: _reactNative.Easing.out(_reactNative.Easing.poly(5)),
    timing: _reactNative.Animated.timing
  },
  screenInterpolator: _CardStackStyleInterpolator2.default.forFadeFromBottomAndroid
};

var FadeOutToBottomAndroid = {
  transitionSpec: {
    duration: 230,
    easing: _reactNative.Easing.in(_reactNative.Easing.poly(4)),
    timing: _reactNative.Animated.timing
  },
  screenInterpolator: _CardStackStyleInterpolator2.default.forFadeFromBottomAndroid
};

function defaultTransitionConfig(transitionProps, prevTransitionProps, isModal) {
  if (_reactNative.Platform.OS === 'android') {
    if (prevTransitionProps && transitionProps.index < prevTransitionProps.index) {
      return FadeOutToBottomAndroid;
    }
    return FadeInFromBottomAndroid;
  }

  if (isModal) {
    return ModalSlideFromBottomIOS;
  }
  return SlideFromRightIOS;
}

function getTransitionConfig(transitionConfigurer, transitionProps, prevTransitionProps, isModal) {
  var defaultConfig = defaultTransitionConfig(transitionProps, prevTransitionProps, isModal);
  if (transitionConfigurer) {
    return babelHelpers.extends({}, defaultConfig, transitionConfigurer());
  }
  return defaultConfig;
}

exports.default = {
  defaultTransitionConfig: defaultTransitionConfig,
  getTransitionConfig: getTransitionConfig
};