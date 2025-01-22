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
      //성공하면 2, 진행 주이면 1, 실패가 0반환환
      if (reader.readyState === 2 && e.target?.result) {
        handleImageUplaod(e.target.result)
      }
    }
    console.log(file)

    reader.readAsDataURL(file)
  }

  return (
    <div className={photo_container}>
      <div className={image_container}>
        <Image
          style={{ borderRadius: ' 50%' }}
          src={image != '' ? kakaoImg : image}
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
            accept="image/*"
          />
        </label>
      </div>
    </div>
  )
}
