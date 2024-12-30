import { body20M, label16SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const input = style([
  body20M,
  {
    display: 'flex',
    alignItems: 'center',

    width: '46rem',
    height: '6.4rem',

    borderRadius: '16px',
    borderColor: vars.grayScale.grayscale100,
    borderWidth: '2px',
    color: vars.grayScale.grayscale800,

    paddingLeft: '2rem',

    outline: 'none',
  },
])

export const input_tag = style([
  label16SB,
  {
    color: vars.grayScale.grayscale800,
  },
])
