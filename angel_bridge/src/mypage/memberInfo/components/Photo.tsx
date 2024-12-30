import React from 'react'
import Image from 'next/image'

import exampleImg from '../assets/mask.png'
import clipBtn from '../assets/clip_btn.svg'
import {
  clip_container,
  image_container,
  photo_container,
} from '../styles/photo.css'

export default function Photo() {
  return (
    <div className={photo_container}>
      <div className={image_container}>
        <Image src={exampleImg} fill alt="기본이미지" />
      </div>
      <div className={clip_container}>
        <Image src={clipBtn} fill alt="클립" />
      </div>
    </div>
  )
}
