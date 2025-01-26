import React from 'react'
import { active_save_change_btn, save_change_btn } from '../styles/button.css'

export default function SaveChangeBtn({
  isChange,
  onClick,
}: {
  isChange: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={isChange ? active_save_change_btn : save_change_btn}
    >
      변경사항 저장
    </button>
  )
}
