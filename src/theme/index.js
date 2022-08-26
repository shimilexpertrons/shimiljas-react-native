import { createTheme } from '@shopify/restyle'

const palette = {
  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  gray: '#f2f2f2',
  black: '#0B0B0B',
  white: '#FFFFFF',
};


const theme = createTheme({
  colors: {
    mainBackground: palette.gray,
    cardPrimaryBackground: palette.white,
    primary: palette.greenPrimary,
    secondary: palette.greenLight,
    text: palette.black,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
      header: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 34,
        lineHeight: 42.5,
        color: 'text',
      },
      subheader: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 24,
        lineHeight: 30,
        color: 'text',
      },
      paragraph: {
        fontFamily: 'Montserrat-Light',
        fontSize: 16,
        lineHeight: 24,
        color: 'text',
      },
      text: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: 'cardPrimaryBackground',
      },
      textwhite: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: 'text',
      },
  },
});

export default theme;