import React from 'react'
import { container, Info_container } from '../styles/info.css'
import Photo from './Photo'
import SaveChangeBtn from './SaveChangeBtn'
import NameInput from './NameInput'
import PhoneNumberInput from './PhoneNumberInput'
import EmailInput from './EmailInput'

export default function Info() {
  return (
    <div className={container}>
      <Photo />
      <div className={Info_container}>
        <NameInput />
        <PhoneNumberInput />
        <EmailInput />
      </div>
      <SaveChangeBtn />
    </div>
  )
}
