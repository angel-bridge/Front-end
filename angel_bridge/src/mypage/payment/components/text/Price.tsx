import React from 'react'
import { price_style } from '../../styles/texts.css'

export default function Price({ price }: { price: string }) {
  return <p className={price_style}>{price}</p>
}
