// color
const primaryColor = '#027235'
const backgroundColor = '#F4F7F9'
const warningColor = '#FFD148'
const errorColor = '#FE5758' // RedColor
const redColor = '#E4455B' // DeepRedColor
const whiteColor = '#FFFFFF'
const blackColor = '#000000'
const greyColor = '#444444'

// text color
const primaryTextColor = '#001E0D'
const secondaryTextColor = '#6B716E'
const blueTextColor = '#548DD0'
const greyTextColor = '#626865'
const lightGreyTextColor = '#EEF0F5'
const disableTextColor = '#ABAEAC'

// text size
const tinyTextSize = 12
const primaryTextSize = 14
const largeTextSize = 20
const buttonTextSize = 16
const titleTextSize = 24

// text bold
const textBold = '500'

// screen width
const maxWidth = 400

// button size
const buttonHeight = 45

// border radius
const tinyRadius = 10
const normalRadius = 20
const largeRadius = 50

// customize switch button
const switchColor = {
  backgroundColor: disableTextColor,
  backgroundActive: blueTextColor,
  backgroundInactive: backgroundColor,
  circleActiveColor: whiteColor,
  circleInActiveColor: disableTextColor,
  backgroundColorBorder: greyTextColor,
}

export const component = {
  title: {
    fontSize: titleTextSize,
    fontWeight: textBold,
    color: primaryTextColor,
  },
  caption: {
    fontSize: primaryTextSize,
    color: secondaryTextColor,
  },
  buttonText: {
    fontSize: buttonTextSize,
    fontWeight: textBold,
  },
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    height: buttonHeight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export {
  primaryColor,
  backgroundColor,
  whiteColor,
  blackColor,
  warningColor,
  errorColor,
  redColor,
  greyColor,
  primaryTextColor,
  secondaryTextColor,
  blueTextColor,
  greyTextColor,
  lightGreyTextColor,
  disableTextColor,
  tinyTextSize,
  primaryTextSize,
  largeTextSize,
  buttonTextSize,
  titleTextSize,
  textBold,
  maxWidth,
  buttonHeight,
  tinyRadius,
  normalRadius,
  largeRadius,
  switchColor,
}
