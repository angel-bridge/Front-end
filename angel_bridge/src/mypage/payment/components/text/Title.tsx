import React from 'react'
import { title_style } from '../../styles/texts.css'

export default function Title({ title }: { title: string }) {
  return <p className={title_style}>{title}</p>
}
