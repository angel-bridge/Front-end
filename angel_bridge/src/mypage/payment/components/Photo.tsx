'use client'
import React from 'react'
import Image from 'next/image'
import { image_wrapper } from '../styles/photo.css'

export default function Photo({ imageUrl }: { imageUrl: string }) {
  return (
    <div className={image_wrapper}>
      <Image src={imageUrl} alt="dummyImg" />
    </div>
  )
}
