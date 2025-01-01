import React from 'react'
import Photo from './Photo'
import Texts from './Texts'
import CancelBtn from './CancelBtn'
import {
  container,
  content,
  photo_text_container,
} from '../styles/container.css'

export default function Content() {
  return (
    <div className={content}>
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
