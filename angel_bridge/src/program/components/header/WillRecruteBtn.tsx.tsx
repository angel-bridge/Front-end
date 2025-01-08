import { blackbutton, graybutton } from '@/program/styles/button.css'

export default function WillRecruteBtn({
  handleClickUpcoming,
  isClickUpcoming,
}: {
  handleClickUpcoming: () => void
  isClickUpcoming: boolean
}) {
  return (
    <button
      onClick={handleClickUpcoming}
      className={isClickUpcoming ? blackbutton : graybutton}
    >
      모집 예정
    </button>
  )
}
