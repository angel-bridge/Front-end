import { title20SB, vars } from '@/style/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

export const card_container = style([
  title20SB,
  {
    display: 'flex',
    flexDirection: 'column',

    justifyContent: 'center',
    alignItems: 'center',

    width: '6.6rem',
    height: '14.8rem',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    paddingRight: '3.2rem',
    paddingLeft: '3.2rem',
    gap: '0.8rem',
  },
])

export const text_style = styleVariants({
  green: {
    color: vars.sementic.sementicSuccess,
  },
  orange: {
    color: vars.sementic.sementicWarning,
  },
  red: {
    color: vars.sementic.sementicDanger,
  },
  purple: {
    color: vars.purple.purple400,
  },
  gray: {
    color: vars.grayScale.grayscale200,
  },
})

export const status_img = style({
  position: 'relative',
  width: '8rem',
  height: '8rem',
})
