import { title24SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const length_style = style([
  title24SB,
  {
    color: vars.grayScale.grayscale800,
  },
])

export const program_container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',

  width: '104rem',
  maxHeight: '110rem',

  gap: '3.2rem',
})
