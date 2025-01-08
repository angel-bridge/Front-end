import { title16SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const emoji_style = style({
  position: 'relative',
  width: '2.4em',
  height: '2.4rem',
})

export const detail_title = style([
  title16SB,
  {
    color: vars.grayScale.grayscale800,
    width: '6rem',
  },
])

export const detail_container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.8rem',
})
