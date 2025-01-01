import { body14M, title16SB, title20SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

const date = style([
  body14M,
  {
    color: vars.grayScale.grayscale300,
    height: 'fit-content',
    margin: 0,
    marginBottom: '1.2rem',
  },
])
const is_paied = style([
  title16SB,
  {
    color: vars.sementic.sementicSuccess,
    margin: 0,
    marginBottom: '0.8rem',
  },
])

const title = style([
  title20SB,
  {
    color: vars.grayScale.grayscale800,
    margin: 0,
    marginBottom: '0.4rem',
  },
])

const price = style([
  body14M,
  {
    color: vars.grayScale.grayscale600,
    margin: 0,
  },
])

export { date, is_paied, title, price }

export const texts_container = style({
  display: 'flex',
  flexDirection: 'column',

  width: '33rem',
  height: '12rem',
})
