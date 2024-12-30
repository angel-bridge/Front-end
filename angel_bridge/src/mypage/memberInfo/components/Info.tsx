import React from 'react'
import Button from './Button'
import { INFO_LIST, MYPAGE_BTN_LIST } from '../core/info'
import InputWithTag from './InputWithTag'
import { button_container } from '../styles/button.css'
import { container, Info_container } from '../styles/info.css'
import Photo from './Photo'
import SaveChangeBtn from './SaveChangeBtn'

export default function Info() {
  return (
    <div className={container}>
      <div className={button_container}>
        {MYPAGE_BTN_LIST.map((text) => {
          return <Button text={text} key={text} />
        })}
      </div>
      <Photo />
      <div className={Info_container}>
        {INFO_LIST.map((data) => {
          const { info, infodetail } = data
          return <InputWithTag info={info} infodetail={infodetail} key={info} />
        })}
      </div>
      <SaveChangeBtn />
    </div>
  )
}
