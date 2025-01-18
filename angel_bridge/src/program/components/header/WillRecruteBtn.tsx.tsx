'use client'
import { useProgramStore } from '@/program/store/useProgramStore'
import { blackbutton, graybutton } from '@/program/styles/button.css'

export default function WillRecruteBtn() {
  const { isClickUpcomings, setIsClickUpcoming } = useProgramStore()

  function handleOnClick() {
    setIsClickUpcoming() // 상태를 토글
  }
  return (
    <button
      onClick={handleOnClick}
      className={isClickUpcomings ? blackbutton : graybutton}
    >
      모집 예정
    </button>
  )
}
