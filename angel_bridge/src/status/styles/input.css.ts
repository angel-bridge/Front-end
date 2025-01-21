import { vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const input_style = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '39.8rem',
  height: '8rem',

  borderRadius: '12px',
  border: '2px solid',
  borderColor: vars.grayScale.grayscale400,
})
