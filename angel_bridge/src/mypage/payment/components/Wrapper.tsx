import React from 'react'
import Photo from './Photo'
import Texts from './Texts'
import CancelBtn from './CancelBtn'
import {
  container,
  photo_text_container,
  wrapper,
} from '../styles/container.css'

export default function Wrapper() {
  return (
    <div className={wrapper}>
      <div className={container}>
        <div className={photo_text_container}>
          <Photo />
          <Texts />
        </div>
        <CancelBtn />
      </div>
    </div>
  )
}
