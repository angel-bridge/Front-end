import {
  createTheme,
  createThemeContract,
  globalFontFace,
  style,
} from '@vanilla-extract/css'

export const grayColors = createThemeContract({
  grayscale00: null,
  grayscale50: null,
  grayscale100: null,
  grayscale200: null,
  grayscale300: null,
  grayscale400: null,
  grayscale500: null,
  grayscale600: null,
  grayscale700: null,
  grayscale800: null,
  grayscale900: null,
  grayscaleAlpha: null,
})

export const grayScale = createTheme(grayColors, {
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
})

export const purpleColors = createThemeContract({
  purple100: null,
  purple200: null,
  purple300: null,
  purple400: null,
  purple500: null,
})

export const purple = createTheme(purpleColors, {
  purple100: '#f6f6fb',
  purple200: '#ececf7',
  purple300: '#9e8dff',
  purple400: '#6c54f6',
  purple500: '#523dc7',
})

export const sementicColors = createThemeContract({
  sementicDanger: null,
  sementicSuccess: null,
  sementicAlphaDanger100: null,
  sementicAlphaDanger200: null,
})

export const sementic = createTheme(sementicColors, {
  sementicDanger: '#fa2a35',
  sementicSuccess: '#1aa174',
  sementicAlphaDanger100: 'rgba(250, 42, 53, 0.1)',
  sementicAlphaDanger200: 'rgba(250, 42, 53, 0.5)',
})

const groundColors = createThemeContract({
  background: null,
  foreground: null,
})

export const ground = createTheme(groundColors, {
  background: '#ffffff',
  foreground: '#171717',
})

// 여기서부터 font입니다다
globalFontFace('Pretendard', {
  src: "url('https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-Bold.woff2') format('woff2')",
  fontWeight: '700',
  fontStyle: 'normal',
})

globalFontFace('Pretendard', {
  src: "url('https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-SemiBold.woff2') format('woff2')",
  fontWeight: '600',
  fontStyle: 'normal',
})

globalFontFace('Pretendard', {
  src: "url('https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-Medium.woff2') format('woff2')",
  fontWeight: '500',
  fontStyle: 'normal',
})

globalFontFace('Pretendard', {
  src: "url('https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-Regular.woff2') format('woff2')",
  fontWeight: '400',
  fontStyle: 'normal',
})

globalFontFace('Pretendard', {
  src: "url('https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-Light.woff2') format('woff2')",
  fontWeight: '300',
  fontStyle: 'normal',
})

const typographys = createThemeContract({
  fontFamily: null,
  fontWeightBold: null,
  fontWeightSemiBold: null,
  fontWeightMedium: null,
  fontWeightRegular: null,
  fontWeightLight: null,
})

export const pretendardTheme = createTheme(typographys, {
  fontFamily: "'Pretendard', sans-serif",
  fontWeightBold: '700',
  fontWeightSemiBold: '600',
  fontWeightMedium: '500',
  fontWeightRegular: '400',
  fontWeightLight: '300',
})

export const heading48B = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightBold,
  fontSize: '4.8rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})

export const heading40B = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightBold,
  fontSize: '4.0rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})
export const heading32B = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightBold,
  fontSize: '3.2rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})
export const heading28B = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightBold,
  fontSize: '2.8rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})
export const title32SB = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '3.2rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})

export const title28SB = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '2.8rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})

export const title24SB = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '2.4rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})

export const title20SB = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '2.0rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})

export const title18SB = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '1.8rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})

export const title16SB = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '1.6rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})

export const subTitle24M = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '2.4rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})

export const subTitle20M = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightMedium,
  fontSize: '2.0rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})

export const subTitle16M = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightMedium,
  fontSize: '1.6rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})

export const body20M = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightMedium,
  fontSize: '2.0rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})

export const body18M = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightMedium,
  fontSize: '1.8rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})

export const body16SB = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '1.6rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})

export const body16M = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightMedium,
  fontSize: '1.6rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})

export const body16R = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightRegular,
  fontSize: '1.6rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})

export const body14M = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightMedium,
  fontSize: '1.4rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})

export const body14R = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightRegular,
  fontSize: '1.4rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})

export const label16SB = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '1.6rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})

export const label16M = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightMedium,
  fontSize: '1.6rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})
export const label14SB = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightSemiBold,
  fontSize: '1.4rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})
export const label14M = style({
  fontFamily: typographys.fontFamily,
  fontWeight: typographys.fontWeightMedium,
  fontSize: '1.4rem',
  lineHeight: '150%',
  letterSpacing: '-2%',
})
