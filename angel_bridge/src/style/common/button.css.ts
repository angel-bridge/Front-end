import { style } from '@vanilla-extract/css'
import { grayColors, title16SB } from 'style/theme.css'

export const graybutton = style([
  title16SB,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '12rem',
    height: '4.8rem',

    borderRadius: '12px',

    backgroundColor: grayColors.grayscale50,
    color: grayColors.grayscale500,
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

    backgroundColor: grayColors.grayscale800,
    color: grayColors.grayscale00,
  },
])
