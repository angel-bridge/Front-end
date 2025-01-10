import { style } from '@vanilla-extract/css'

export const mypage_container = style({
  margin: '0 20rem',

  height: '100%',
  marginTop: '10rem',
})

export const page_container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',

  height: '100vh',
  width: '100vw',
})
