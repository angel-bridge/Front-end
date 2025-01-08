import { body16R, title16SB, title28SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const programcard_container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6rem',
})

export const programPhoto = style({
  position: 'relative',
  width: '44.8rem',
  height: '24.4rem',
  borderRadius: '32.15px',
})

export const program_title = style([
  title28SB,
  {
    color: vars.grayScale.grayscale800,
  },
])

export const detail_badge = style({
  position: 'relative',
  width: '2.4rem',
  height: '2.4rem',
})

export const detail_style = style([
  body16R,
  {
    color: vars.grayScale.grayscale600,
  },
])

//하나하나 타이틀틀
export const detail_style_container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3.2rem',
})

export const detail_wrapper = style({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'center',

  gap: '1.6rem',

  width: '53.2rem',
})
