import { subTitle16M, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const search = style([
  subTitle16M,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '33rem',
    height: '4.8rem',

    borderRadius: '12px',

    border: '2px solid vars.grayScale.grayscale50',
    backgroundColor: vars.grayScale.grayscale00,

    '::placeholder': {
      color: vars.grayScale.grayscale400,
    },
  },
])
