import { title20SB, title32SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const container_style = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  width: '49rem',
  height: '40rem',

  gap: '3.4rem',
})

export const title_style = style([
  title32SB,
  {
    color: vars.grayScale.grayscale800,
  },
])

export const discription_contaier_style = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '38rem',
  height: '6.4rem',

  borderRadius: '70px',
  backgroundColor: vars.purple.purple400,

  cursor: 'pointer',

  border: 'none',
})

export const discription_style = style([
  title20SB,
  {
    color: vars.grayScale.grayscale00,
  },
])

export const image_container_style = style({
  position: 'relative',
  width: '22rem',
  height: '22rem',
})

export const pagecompo_style = style({
  display: 'flex',
  alignItems: ' center',
  gap: '6rem',
})
