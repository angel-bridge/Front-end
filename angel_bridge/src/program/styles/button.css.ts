import { title16SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const graybutton = style([
  title16SB,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '12rem',
    height: '4.8rem',

    borderRadius: '12px',

    backgroundColor: vars.grayScale.grayscale50,
    color: vars.grayScale.grayscale500,
  },
])

export const blackbutton = style([
  title16SB,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '12rem',
    height: '4.8rem',

    borderRadius: '12px',

    backgroundColor: vars.grayScale.grayscale800,
    color: vars.grayScale.grayscale00,
  },
])
