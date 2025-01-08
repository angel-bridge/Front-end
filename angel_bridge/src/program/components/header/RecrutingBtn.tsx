import { blackbutton, graybutton } from '@/program/styles/button.css'

export default function RecrutingBtn({
  handleClickOngoing,
  isClickOngoing,
}: {
  handleClickOngoing: () => void
  isClickOngoing: boolean
}) {
  return (
    <button
      onClick={handleClickOngoing}
      className={isClickOngoing ? blackbutton : graybutton}
    >
      모집중
    </button>
  )
}
