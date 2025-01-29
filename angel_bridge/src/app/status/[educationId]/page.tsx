import UpperFrame from '@/status/components/UpperFrame'
import React from 'react'
import { layout } from '../pagelayout.css'
import BottomFrame from '@/status/components/BottomFrame'

export default function page() {
  return (
    <div>
      <div className={layout}>
        <UpperFrame />
        <BottomFrame />
      </div>
    </div>
  )
}
