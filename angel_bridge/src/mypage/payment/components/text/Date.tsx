import React from 'react'
import { date_style } from '../../styles/texts.css'

export default function Date({ originalDate }: { originalDate: string }) {
  const [datePart] = originalDate.split('T')
  const [year, month, day] = datePart.split('-')
  const formattedDate = `${year}. ${month}. ${day}`
  return <p className={date_style}>{formattedDate}</p>
}
