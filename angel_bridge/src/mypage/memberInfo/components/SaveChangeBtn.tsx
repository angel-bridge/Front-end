import React from 'react'
import { active_save_change_btn, save_change_btn } from '../styles/button.css'

export default function SaveChangeBtn({ isChange }: { isChange: boolean }) {
  return (
    <button className={isChange ? active_save_change_btn : save_change_btn}>
      변경사항 저장
    </button>
  )
}
