import { heading48B, title28SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

//파이차트 + notion 묶임
export const status_constainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '40.4rem',
})

//파이차트 있는 부분분
export const piechart_container = style([
  title28SB,
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '19.2rem',
    borderRadius: '20px',
    paddingTop: '2.8rem',
    paddingBottom: '2.8rem',
    paddingRight: '3.2rem',
    paddingLeft: '3.2rem',

    backgroundColor: vars.grayScale.grayscale00,
  },
])

export const piechart_percent = style([
  heading48B,
  {
    color: vars.grayScale.grayscale800,
  },
])

//각 공지사항 있는 부분
export const notion_container = style([
  title28SB,
  {
    color: vars.grayScale.grayscale800,
    display: 'flex',
    flexDirection: 'column',

    justifyContent: 'space-between',

    paddingTop: '2.8rem',
    paddingBottom: '2.8rem',
    paddingRight: '3.2rem',
    paddingLeft: '3.2rem',

    borderRadius: '20px',
    width: '23.2rem',
    height: '19.2rem',
    backgroundColor: vars.grayScale.grayscale00,

    cursor: 'pointer',
  },
])

export const notions_container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '48.6rem',
  height: '19.2rem',
  gap: '2.2rem',
})

export const notion_icon = style({
  position: 'relative',
  width: '6rem',
  height: '6rem',
})
