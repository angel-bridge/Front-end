import React from 'react'
import Button from './Button'
import { INFO_LIST, MYPAGE_BTN_LIST } from '../core/info'
import InputWithTag from './InputWithTag'

export default function Info() {
  return (
    <div>
      <div>
        {MYPAGE_BTN_LIST.map((text) => {
          return <Button text={text} key={text} />
        })}
      </div>
      <div>
        {INFO_LIST.map((data) => {
          const { info, infodetail } = data
          return <InputWithTag info={info} infodetail={infodetail} key={info} />
        })}
      </div>
    </div>
  )
}
