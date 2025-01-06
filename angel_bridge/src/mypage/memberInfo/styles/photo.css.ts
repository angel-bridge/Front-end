import { style } from '@vanilla-extract/css'

export const photo_container = style({
  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  width: '12rem',
  height: '12rem',

  borderRadius: '50%',
})

export const image_container = style({
  position: 'relative',
  width: '12rem',
  height: '12rem',
})

export const clip_container = style({
  position: 'absolute',
  width: '2.8rem',
  height: '2.8rem',

  cursor: 'pointer',

  right: 0,
  zIndex: '0',
})

export const image_input = style({
  display: 'none',
})
