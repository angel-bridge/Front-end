'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import clipBtn from '../assets/clip_btn.svg'
import {
  clip_container,
  image_container,
  image_input,
  photo_container,
} from '../styles/photo.css'

interface PhotoProps {
  image: string | StaticImageData
  handleImageUplaod: (newImg: string) => void
  kakaoImg: string | undefined
}

export default function Photo({
  image,
  handleImageUplaod,
  kakaoImg,
}: PhotoProps) {
  function handleClickChangePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      if (reader.readyState === 2 && e.target?.result) {
        handleImageUplaod(e.target.result as string)
      }
    }

    reader.readAsDataURL(file)
  }

  return (
    <div className={photo_container}>
      <div className={image_container}>
        <Image
          style={{ borderRadius: ' 50%' }}
          src={kakaoImg ? kakaoImg : image}
          fill
          alt="기본이미지"
        />
      </div>
      <div className={clip_container}>
        <label>
          <Image style={{ cursor: 'pointer' }} src={clipBtn} fill alt="클립" />
          <input
            className={image_input}
            onChange={handleClickChangePhoto}
            type="file"
          />
        </label>
      </div>
    </div>
  )
}
