import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
  fontFace,
  style,
} from '@vanilla-extract/css'

export const global = createGlobalTheme(':root', {
  grayScale: {
    grayscale00: '#ffffff',
    grayscale50: '#f2f4f8',
    grayscale100: '#dde1e6',
    grayscale200: '#c1c7cd',
    grayscale300: '#a2a9b0',
    grayscale400: '#878d96',
    grayscale500: '#697077',
    grayscale600: '#4d5358',
    grayscale700: '#343a3f',
    grayscale800: '#21272a',
    grayscale900: '#121619',
    grayscaleAlpha: '#000000',
  },
  purple: {
    purple100: '#f6f6fb',
    purple200: '#ececf7',
    purple300: '#9e8dff',
    purple400: '#6c54f6',
    purple500: '#523dc7',
  },
  sementic: {
    sementicDanger: '#fa2a35',
    sementicSuccess: '#1aa174',
    sementicAlphaDanger100: 'rgba(250, 42, 53, 0.1)',
    sementicAlphaDanger200: 'rgba(250, 42, 53, 0.5)',
  },
  ground: {
    background: '#ffffff',
    foreground: '#171717',
  },
})

export const vars = { ...global }

// 여기서부터 font입니다다
const pretendardTheme = fontFace({
  src: "url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff')",
})

const typographys = createThemeContract({
  fontFamily: null,
  fontWeightBold: null,
  fontWeightSemiBold: null,
  fontWeightMedium: null,
  fontWeightRegular: null,
  fontWeightLight: null,
})

export const pretendardThemee = createTheme(typographys, {
  fontFamily: "'Pretendard', sans-serif",
  fontWeightBold: '700',
  fontWeightSemiBold: '600',
  fontWeightMedium: '500',
  fontWeightRegular: '400',
  fontWeightLight: '300',
})

export const heading48B = style({
  fontFamily: pretendardTheme,
  fontWeight: 700,
  fontSize: '4.8rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})

export const heading40B = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightBold,
  fontSize: '4.0rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})
export const heading32B = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightBold,
  fontSize: '3.2rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})
export const heading28B = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightBold,
  fontSize: '2.8rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})
export const title32SB = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '3.2rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})

export const title28SB = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '2.8rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})

export const title24SB = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '2.4rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})

export const title20SB = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '2.0rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})

export const title18SB = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '1.8rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})

export const title16SB = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '1.6rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})

export const subTitle24M = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '2.4rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})

export const subTitle20M = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightMedium,
  fontSize: '2.0rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})

export const subTitle16M = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightMedium,
  fontSize: '1.6rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})

export const body20M = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightMedium,
  fontSize: '2.0rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})

export const body18M = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightMedium,
  fontSize: '1.8rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})

export const body16SB = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '1.6rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})

export const body16M = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightMedium,
  fontSize: '1.6rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})

export const body16R = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightRegular,
  fontSize: '1.6rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})

export const body14M = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightMedium,
  fontSize: '1.4rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})

export const body14R = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightRegular,
  fontSize: '1.4rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})

export const label16SB = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '1.6rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})

export const label16M = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightMedium,
  fontSize: '1.6rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})
export const label14SB = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '1.4rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})
export const label14M = style({
  fontFamily: pretendardTheme,
  fontWeight: typographys.fontWeightMedium,
  fontSize: '1.4rem',
  lineHeight: '150%',
  letterSpacing: '-0.02rem',
})
