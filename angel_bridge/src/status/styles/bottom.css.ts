import { title24SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const title_style = style([
  title24SB,
  {
    color: vars.grayScale.grayscale800,
  },
])

export const bottom_contaeinr = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

export const buttons_container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  height: '4.8rem',
})

export const submitCards_container = style({
  display: 'flex',
  alignItems: 'center',
  width: '103rem',
  height: '18.8rem',
  gap: '2rem',
})
