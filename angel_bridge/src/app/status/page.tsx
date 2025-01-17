import UpperFrame from '@/status/components/UpperFrame'
import React from 'react'
import Header from '../home/components/Header'
import { layout } from './pagelayout.css'
import BottomFrame from '@/status/components/BottomFrame'

export default function page() {
  return (
    <div>
      <Header />
      <div className={layout}>
        <UpperFrame />
        <BottomFrame />
      </div>
    </div>
  )
}
