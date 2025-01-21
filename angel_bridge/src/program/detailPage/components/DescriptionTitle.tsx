import Image from 'next/image'
import React from 'react'
import { DESCRIPTION_LIST } from '../core/description'
import {
  emoji_style,
  detail_title,
  detail_container,
} from '../styles/description.css'

export default function DescriptionTitle({ number }: { number: number }) {
  return (
    <div className={detail_container}>
      <div className={emoji_style}>
        <Image
          src={DESCRIPTION_LIST[number].emoji}
          alt={DESCRIPTION_LIST[number].title}
          fill
        />
      </div>
      <p className={detail_title}>{DESCRIPTION_LIST[number].title}</p>
    </div>
  )
}
