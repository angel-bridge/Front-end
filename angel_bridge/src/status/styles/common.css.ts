//미션 카드 + 모달 카드 공통 스타일 추가

import {
  body18M,
  subTitle20SB,
  title28SB,
  title32SB,
  vars,
} from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

//upper쪽 전체 담는 애
export const upper_container = style({
  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',
  width: '107.2rem',
  height: '54.4rem',

  borderRadius: '40px',

  backgroundColor: vars.purple.purple100,
})

export const upper_content_container = style({
  display: 'flex',
  justifyContent: ' center',
  flexDirection: 'column',
  width: '99.2rem',
  height: '48rem',
  gap: '2.8rem',
})

export const upper_cards_container = style({
  display: 'flex',
  justifyContent: ' space-between',
  alignItems: 'center',

  width: '99.2rem',
  height: '40.4rem',
})

export const upper_title_style = style([
  title32SB,
  {
    color: vars.grayScale.grayscale800,
  },
])

//공통 컨테이너
export const content_container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',

  width: '44.2rem',

  paddingTop: '2.8rem',
  paddingBottom: '2.8rem',
  paddingRight: '2rem',
  paddingLeft: '2rem',

  borderRadius: '28px',
  backgroundColor: vars.grayScale.grayscale00,
})

//날짜나 오늘의 미션 제목 부분
export const title_style = style([
  title28SB,
  {
    color: vars.grayScale.grayscale800,
  },
])

//약간 부제목 부분
export const second_title_style = style([
  subTitle20SB,
  {
    color: vars.grayScale.grayscale800,
  },
])

//설명 부분
export const description_style = style([
  body18M,
  {
    display: 'flex',
    alignItems: 'center',
    width: '38.8rem',
    height: ' 10.8rem',
  },
])

//그 글들 담는 부분
export const text_container_style = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  width: '39.8rem',
})

//서브제목이랑 설명 담는 부분
export const subText_container_style = style({
  display: 'flex',
  flexDirection: 'column',
  height: '15rem',
  gap: '1.2rem',
  marginBottom: '4rem',
})

export const modal_title_closebtn = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '39.7rem',
})

export const modal_container = style({
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '100',
})

export const modal_background = style({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  zIndex: 10,
  height: '100%',
  width: '100%',
})

export const modal_background_two = style({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 10,
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.1)',
  width: '100%',
})
