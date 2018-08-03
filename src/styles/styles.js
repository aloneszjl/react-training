import isFinite from 'lodash/isFinite';

const defaultZoomSize = 100;
const hd = size => {
  if (!isFinite(size)) {
    return;
  }
  return typeof size === 'string' ? size : `${size}rem`;
};
export default {
  hasHeader: true,
  zoomSize: defaultZoomSize,
  hd,
  important: '#273239',
  primary: 'blue',
  regular: '#4d555a',
  regularLight: '#aaa',
  danger: '#FF5346',
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
  bodyBackgroundColor: '#f0f1f3',
  secondaryText: '#999999',
  lightGray: '#B4B4B4',
  boldBlackColor: '#333',
  dividerColor: '#E8E9EA',
  blackColor: '#333333',
  lightBlackColor: '#666666',
  logoColor: '#013b53',
  unselectedTintColor: '#999',
  failureTintColor: '#dcdcdc',
  defaultIconTintColor: '#000',
  dangerColor: '#FF5346',
  greenColor: '#54B095',
  orangeColor: '#ff9600',
  lightGreyColor: '#C9CACB',
  darkGreyColor: '#636465',
  darkBlueColor: '#1F80B1',
  grayColor: '#999999',
  blue: '#003B53',
  grayBackground: 'rgba(234, 232, 232, 0.1)',
  deepPurple: '#5B5C7A',
  footerHeight: 0.45,
  tabBarHeight: 0.5,
  headerHeight: 0,
  oriHeaderHeight: 0.45,
  size: {
    icon: {
      tl: hd(1),
      mg: hd(0.7),
      sg: hd(0.5),
      lg: hd(0.4),
      md: hd(0.3),
      sm: hd(0.2),
      xs: hd(0.175),
      xxs: hd(0.15),
      ss: hd(0.14),
      ls: hd(0.12),
      mmg: hd(1),
    },
    text: {
      xxsmall: hd(0.09),
      xsmall: hd(0.1),
      ssmall: hd(0.11),
      small: hd(0.12),
      msmall: hd(0.13),
      tsmall: hd(0.14),
      standard: hd(0.14),
      xslarge: hd(0.15),
      xlarge: hd(0.16),
      large: hd(0.17),
      xtlarge: hd(0.18),
      tlarge: hd(0.19),
      mlarge: hd(0.24),
      mllarge: hd(0.27),
      llarge: hd(0.32),
    },
  },
};
