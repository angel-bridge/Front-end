import { vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const content = style({
  display: 'flex',
  alignItems: 'center',
  height: '16.8rem',

  borderRadius: '32px',

  backgroundColor: vars.purple.purple100,
})

export const container = style({
  display: 'flex',
  alignItems: 'flex-end',
  height: '12rem',
})

export const photo_text_container = style({
  display: 'flex',
  alignItems: 'center',

  gap: '2.8rem',

  width: '87.2rem',
  height: '12rem',
})

export const wrapper = style({
  display: 'flex',
  width: '104rem',
  flexDirection: 'column',
})
