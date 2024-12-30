import { buttonblack } from '../styles/button.css'

// 회원정보, 결제 내역 버튼 (버튼이지만, 문자라서 p태그 사용용)
export default function Button({ text }: { text: string }) {
  return <p className={buttonblack}>{text}</p>
}
