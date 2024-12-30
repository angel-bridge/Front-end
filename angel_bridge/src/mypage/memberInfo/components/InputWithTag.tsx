import { label } from '../styles/info.css'
import { inputwithtag_container } from '../styles/input.css'
import Input from './Input'
import InputTag from './InputTag'

interface InputWithTageProps {
  info: string
  infodetail: string
}

// 각각 input이랑 tag
export default function InputWithTag({ info, infodetail }: InputWithTageProps) {
  return (
    <div className={inputwithtag_container}>
      <InputTag info={info} />
      <Input infodetail={infodetail} />
      {info == '닉네임' && <p className={label}>{info.length}/10</p>}
    </div>
  )
}
