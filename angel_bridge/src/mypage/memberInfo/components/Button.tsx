import { buttonblack } from '../styles/button.css'

interface ButtonProps {
  text: string
  onClick: () => void
}

// 회원정보, 결제 내역 버튼 (버튼이지만, 문자라서 p태그 사용용)
export default function Button({ text, onClick }: ButtonProps) {
  return (
    <p className={buttonblack} onClick={onClick}>
      {text}
    </p>
  )
}
