import { label16SB, subTitle16M, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const input_style = style([
  subTitle16M,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '39.8rem',
    height: '8rem',

    borderRadius: '12px',
    border: '2px solid',
    borderColor: vars.grayScale.grayscale400,
    '::placeholder': {
      color: vars.grayScale.grayscale400,
    },
  },
])

export const input_label = style([
  label16SB,
  {
    color: vars.grayScale.grayscale800,
  },
])
