import React from 'react'
import { button_style } from '../styles/button.css'
import {
  content_container,
  description_style,
  second_title_style,
  subText_container_style,
  text_container_style,
  title_style,
} from '../styles/common.css'

export default function MissonCard() {
  return (
    <div className={content_container}>
      <div className={text_container_style}>
        <p className={title_style}>오늘의 미션</p>
        <div className={subText_container_style}>
          <p className={second_title_style}>창업아이템 배경 및 필요성</p>
          <p className={description_style}>
            창업 아이템의 배경과 필요성을 명확히 하며 시작해봅시다! 시장과
            소비자 문제를 정확히 정의함으로써 사업 모델(BM)을 구체화할 기초를
            다지고, 창업 아이템이 제공할 수 있는 핵심 가치를 구상해보세요.
          </p>
        </div>
      </div>
      <button className={button_style}>미션 자세히 보기</button>
    </div>
  )
}
