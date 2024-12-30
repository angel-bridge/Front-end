import Input from './Input'
import InputTag from './InputTag'

interface InputWithTageProps {
  info: string
  infodetail: string
}

// 각각 input이랑 tag
export default function InputWithTag({ info, infodetail }: InputWithTageProps) {
  return (
    <div>
      <InputTag info={info} />
      <Input infodetail={infodetail} />
    </div>
  )
}
