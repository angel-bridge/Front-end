import React from 'react'
import StatusCard from './StatusCard'
import MissonCard from './MissonCard'
import {
  upper_cards_container,
  upper_container,
  upper_title_style,
} from '../styles/common.css'

export default function UpperFrame() {
  return (
    <div className={upper_container}>
      <p className={upper_title_style}>예비창업패키지 2주 완성</p>
      <div className={upper_cards_container}>
        <MissonCard />
        <StatusCard />
      </div>
    </div>
  )
}
