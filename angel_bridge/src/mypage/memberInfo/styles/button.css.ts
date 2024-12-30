import { title24SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const buttonblack = style([
  title24SB,
  {
    color: vars.grayScale.grayscale800,
  },
])

export const buttongray = style([
  title24SB,
  {
    color: vars.grayScale.grayscale300,
  },
])

export const button_container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2.4rem',

  cursor: 'pointer',
})
