import { style } from '@vanilla-extract/css'
import { grayColors, subTitle16M } from 'style/theme.css'

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

    '::placeholder': {
      color: grayColors.grayscale400,
    },
  },
])
