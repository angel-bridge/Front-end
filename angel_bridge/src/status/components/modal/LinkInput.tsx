import React from 'react'
import * as style from '@/mypage/memberInfo/styles/input.css'
import ErrorMessage from '@/mypage/memberInfo/components/ErrorMessage'
import { save_change_btn } from '@/mypage/memberInfo/styles/button.css'

export default function LinkInput() {
  return (
    <div>
      <p className={style.input_tag}>노션 링트 *</p>
      <input
        className={style.input}
        placeholder="수행한 과제의 노션 링크를 제출해 주세요"
      />
      <ErrorMessage number={3} />
      <button className={save_change_btn}>미션 제출하기기</button>
    </div>
  )
}
