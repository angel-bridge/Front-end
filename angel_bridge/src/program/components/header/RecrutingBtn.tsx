'use client'
import { useProgramStore } from '@/program/store/useProgramStore'
import { blackbutton, graybutton } from '@/program/styles/button.css'

export default function RecrutingBtn() {
  const { isClickOngoings, setIsClickOngoings } = useProgramStore()

  function handleOnClick() {
    setIsClickOngoings()
  }

  return (
    <button
      onClick={handleOnClick}
      className={isClickOngoings ? blackbutton : graybutton}
    >
      모집중
    </button>
  )
}
