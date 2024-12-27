import { style } from '@vanilla-extract/css'
import { grayColors, subTitle16M, title16SB } from 'style/theme.css'

export const recruteBtn = style([
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

export const search = style([
  subTitle16M,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '33rem',
    height: '4.8rem',

    borderRadius: '12px',

    border: '2px solid grayColors.grayscale50',
    backgroundColor: grayColors.grayscale00,

    '::placeholder': {},
  },
])
