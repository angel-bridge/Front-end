import { blackbutton, graybutton } from '@/program/styles/button.css'

interface ButtonProps {
  isSelected: boolean
  onClick: () => void
}

export default function TakenButton({ isSelected, onClick }: ButtonProps) {
  return <button className={isSelected ? blackbutton : graybutton}
    onClick={onClick}>수강 완료</button>
}
