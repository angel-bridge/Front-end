import React from 'react'
import * as style from '@/mypage/memberInfo/styles/input.css'
import ErrorMessage from '@/mypage/memberInfo/components/ErrorMessage'
import { gray_button_style } from '@/status/styles/button.css'

export default function LinkInput() {
  return (
    <div>
      <p className={style.input_tag}>노션 링트 *</p>
      <input
        className={style.input}
        placeholder="수행한 과제의 노션 링크를 제출해 주세요"
      />
      <ErrorMessage number={3} />
      <button className={gray_button_style}>미션 제출하기</button>
    </div>
  )
}
