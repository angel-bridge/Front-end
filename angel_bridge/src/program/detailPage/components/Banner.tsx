import React from 'react'
import bannerImg from '../assets/banner.png'
import Image from 'next/image'

export default function Banner() {
  return (
    <div
      style={{
        position: 'relative',
        width: '104rem',
        height: '20rem',
      }}
    >
      <Image src={bannerImg} alt="배너" fill />
    </div>
  )
}
