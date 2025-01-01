import React from 'react'
import Image from 'next/image'
import Dummy from '@/app/home/assets/dummyImage.png'
import { image_wrapper } from '../styles/photo.css'

export default function Photo() {
  return (
    <div className={image_wrapper}>
      <Image src={Dummy} alt="dummyImg" />
    </div>
  )
}
