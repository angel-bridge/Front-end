import { title16SB, title20SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

//보라색 버튼 입니다.
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

    cursor: 'pointer',
  },
])

export const bottom_black_style = style([
  {
    color: vars.grayScale.grayscale00,
    backgroundColor: vars.grayScale.grayscale800,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '12rem',
    height: '4.8rem',

    borderRadius: '12px',

    border: 'none',
    cursor: 'pointer',
  },
  title16SB,
])

export const bottom_gray_style = style([
  {
    color: vars.grayScale.grayscale500,
    backgroundColor: vars.grayScale.grayscale50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '12rem',
    height: '4.8rem',

    borderRadius: '12px',

    border: 'none',
    cursor: 'pointer',
  },
  title16SB,
])

export const close_modal = style({
  position: 'relative',
  width: '2.8rem',
  height: '2.8rem',
})
