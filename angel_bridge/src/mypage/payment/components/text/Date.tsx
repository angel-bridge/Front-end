import React from 'react'
import { date_style } from '../../styles/texts.css'

export default function Date({ date }: { date: string }) {
  return <p className={date_style}>{date}</p>
}
