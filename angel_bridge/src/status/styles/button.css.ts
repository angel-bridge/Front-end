import { title20SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const button_style = style([
  title20SB,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '39.8rem',
    height: '6.4rem',

    backgroundColor: vars.purple.purple400,
    borderRadius: '70px',
    border: 'none',

    color: vars.grayScale.grayscale00,
  },
])
