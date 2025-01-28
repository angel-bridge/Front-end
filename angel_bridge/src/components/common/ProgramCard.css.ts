import { style } from '@vanilla-extract/css'
import { vars } from '@/style/theme.css'
import * as font from '@/style/theme.css'

export const contents = style({
  display: 'flex',
  width: '33rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.6rem',
  transition: 'transform 0.7s ease',
  ':hover': {
    transform: 'translateY(-5px)',
  },
  cursor: 'pointer',
})

export const contentImage = style({
  width: '33rem',
  height: '18rem',
  borderRadius: '24px',
  overflow: 'hidden',
  position: 'relative',
})

export const activeBadge = style([
  font.label14SB,
  {
    display: 'inline-flex',
    padding: '0.6rem 1.2rem',
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '30px',
    background: vars.purple.purple400,
    position: 'absolute',
    top: '1.6rem',
    left: '1.6rem',
    zIndex: '10',
    color: vars.grayScale.grayscale00,
  },
])

export const inactiveBadge = style([
  font.label14SB,
  {
    display: 'inline-flex',
    padding: '0.6rem 1.2rem',
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '30px',
    background: vars.grayScale.grayscale500,
    position: 'absolute',
    top: '1.6rem',
    left: '1.6rem',
    zIndex: '10',
    color: vars.grayScale.grayscale00,
  },
])

export const contentText = style({
  display: 'flex',
  flexDirection: 'column',
})

export const contentTitle = style([
  font.title20SB,
  {
    width: '100%',
    color: vars.grayScale.grayscale800,
  },
])

export const contentBio = style([
  font.body14M,
  {
    width: '100%',
    color: vars.grayScale.grayscale600,
  },
])

export const img_style = style({
  position: 'relative',
  width: '33rem',
  height: '18rem',
})
