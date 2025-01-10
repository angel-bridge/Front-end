import React from 'react'
import Photo from './Photo'
import Texts from './Texts'
import CancelBtn from './CancelBtn'
import {
  container,
  content,
  photo_text_container,
} from '../styles/container.css'

export interface ContentProps {
  date: string
  ispaid: boolean
  title: string
  price: string
}

export default function Content(props: ContentProps) {
  const { date, ispaid, title, price } = props
  return (
    <div className={content}>
      <div className={container}>
        <div className={photo_text_container}>
          <Photo />
          <Texts date={date} ispaid={ispaid} title={title} price={price} />
        </div>
        {ispaid && <CancelBtn />}
      </div>
    </div>
  )
}
