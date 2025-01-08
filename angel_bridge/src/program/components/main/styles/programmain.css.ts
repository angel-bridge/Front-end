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
  alignItems: 'center',
  flexWrap: 'wrap',
  rowGap: '2.5rem',
  columnGap: '3.2rem',
  maxHeight: '110rem',
})

export const main_container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
})
