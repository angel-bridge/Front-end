import React from 'react'
import { INFO_LIST } from '../core/info'
import InputWithTag from './InputWithTag'
import { container, Info_container } from '../styles/info.css'
import Photo from './Photo'
import SaveChangeBtn from './SaveChangeBtn'

export default function Info() {
  return (
    <div className={container}>
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
