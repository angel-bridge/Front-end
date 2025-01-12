import Image from 'next/image'
import React from 'react'
import { notion_container, notion_icon } from '../styles/status.css'

export default function Notion({ title, img }: { title: string; img: string }) {
  return (
    <div className={notion_container}>
      <p>{title}</p>
      <div className={notion_icon}>
        <Image alt="이모지" fill src={img} />
      </div>
    </div>
  )
}
