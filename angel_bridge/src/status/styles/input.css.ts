import { label16SB, subTitle16M, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const input_style = style([
  subTitle16M,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '39.8rem',
    height: '4.8rem',

    borderRadius: '12px',
    border: '2px solid',
    paddingLeft: '2rem',
    borderColor: vars.grayScale.grayscale400,
    '::placeholder': {
      color: vars.grayScale.grayscale400,
    },
  },
])

export const input_label = style([
  label16SB,
  {
    marginLeft: '1rem',
    color: vars.grayScale.grayscale800,
  },
])

export const inputwithtag_container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: ' 0.8rem',
})

export const input_button_container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
})
