import { subTitle16M, title20SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const title = style([
  title20SB,
  {
    color: vars.grayScale.grayscale00,
  },
])

export const detail = style([
  subTitle16M,
  {
    color: vars.grayScale.grayscale200,
  },
])

export const text = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
})

export const icon = style({
  position: 'relative',
  width: '2.4rem',
  height: '2.4rem',
})

export const button_style = style({
  display: 'flex',
  width: '24rem',
  height: '5.4rem',

  gap: '0.3rem',

  justifyContent: 'center',
  alignItems: 'center',

  color: vars.grayScale.grayscale00,
  backgroundColor: vars.purple.purple400,

  borderRadius: '1.6rem',
  border: 'none',
  cursor: 'pointer',
})

//
export const purchased_sticky = style({
  position: 'sticky',

  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: vars.grayScale.grayscale800,
  height: '10rem',
})

export const purchased_fixed = style({
  position: 'fixed',
  bottom: '10rem',
  left: '50.5%',
  transform: 'translateX(-50%)',
  zIndex: 5,

  width: '104rem',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: vars.grayScale.grayscale800,
  height: '10rem',
})
