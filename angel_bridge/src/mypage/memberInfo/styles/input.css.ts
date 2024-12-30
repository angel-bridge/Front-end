import { style } from '@vanilla-extract/css'
import { body20M, grayColors, label16SB } from 'style/theme.css'

export const input = style([
  body20M,
  {
    display: 'flex',
    alignItems: 'center',

    width: '48rem',
    height: '6.4rem',

    borderRadius: '16px',
    border: '2px solid grayColors.grayscale00',
    color: grayColors.grayscale800,
  },
])

export const input_tag = style([
  label16SB,
  {
    color: grayColors.grayscale800,
  },
])
