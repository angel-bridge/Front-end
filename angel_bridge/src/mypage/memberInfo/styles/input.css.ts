import { body20M, label14M, label16SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const input = style([
  body20M,
  {
    display: 'flex',
    alignItems: 'center',

    width: '48rem',
    height: '6.4rem',

    borderRadius: '16px',
    borderColor: vars.grayScale.grayscale100,
    borderWidth: '2px',
    color: vars.grayScale.grayscale800,
    borderStyle: 'solid',

    paddingLeft: '2rem',

    margin: 0,

    outline: 'none',

    '::placeholder': {
      color: vars.grayScale.grayscale800,
    },
  },
])

export const input_tag = style([
  label16SB,
  {
    color: vars.grayScale.grayscale800,
    margin: 0,
    paddingLeft: '1rem',
  },
])

export const inputwithtag_container = style({
  display: 'flex',
  flexDirection: 'column',

  height: '12.6rem',
  gap: ' 0.8rem',

  marginBottom: '1.6rem',
})

export const error_case = style([
  label14M,
  {
    color: vars.sementic.sementicDanger,
    margin: 0,
  },
])

export const error_icon = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.2rem',
  height: '1.2rem',
})

export const error_style = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',

  marginLeft: '1rem',
})

export const error_container = style({
  display: 'flex',
  alignItems: 'center',

  justifyContent: 'space-between',
  width: '48rem',
  height: '2.2rem',
})

export const name_error_container = style({
  display: 'flex',
  alignItems: 'center',

  justifyContent: 'flex-end',
  height: '2.2rem',
})
