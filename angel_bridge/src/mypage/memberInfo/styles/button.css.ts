import { title20SB, title24SB, vars } from '@/style/theme.css'
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

export const save_change_btn = style([
  title20SB,
  {
    display: 'flex',
    justifyContent: ' center',
    alignItems: 'center',

    width: '24rem',
    height: '5.4rem',
    borderRadius: '16px',

    backgroundColor: vars.grayScale.grayscale100,
    color: vars.grayScale.grayscale400,
  },
])
