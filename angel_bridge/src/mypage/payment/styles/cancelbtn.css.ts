import { title16SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const cancel_btn = style([
  title16SB,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '12rem',
    height: '4rem',

    borderWidth: '2px',
    borderColor: vars.grayScale.grayscale200,
    borderRadius: '30px',
    borderStyle: 'solid',

    color: vars.grayScale.grayscale300,

    backgroundColor: vars.grayScale.grayscale00,

    cursor: 'pointer',
  },
])
