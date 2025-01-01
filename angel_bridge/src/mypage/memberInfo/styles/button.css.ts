import { title20SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const button_container = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  gap: '2.4rem',

  cursor: 'pointer',
})

export const save_change_btn = style([
  title20SB,
  {
    display: 'flex',
    justifyContent: ' center',
    alignItems: 'center',

    width: '24rem',
    height: '5.4rem',
    borderRadius: '16px',

    border: 'none',

    cursor: 'pointer',

    backgroundColor: vars.grayScale.grayscale100,
    color: vars.grayScale.grayscale400,
  },
])
