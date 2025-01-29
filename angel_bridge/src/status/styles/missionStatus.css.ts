import { title20SB, vars } from '@/style/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

export const card_container = style([
  title20SB,
  {
    display: 'flex',
    flexDirection: 'column',

    justifyContent: 'center',
    alignItems: 'center',

    width: '13rem',
    height: '18.8rem',

    gap: '0.8rem',

    borderRadius: '20px',

    backgroundColor: vars.purple.purple100,

    cursor: 'pointer',
  },
])

export const cardContainerHover = style({
  position: 'relative',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, background-color 0.3s ease',
  selectors: {
    '&:hover': {
      transform: 'translateY(-5px)',
      backgroundColor: vars.purple.purple200,
    },
  },
})

export const noHover = style({
  pointerEvents: 'none',
  cursor: 'default',
  selectors: {
    '&:hover': {
      transform: 'none',
      backgroundColor: 'transparent',
    },
  },
})

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
