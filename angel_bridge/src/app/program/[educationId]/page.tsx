import ProgramCard from '@/program/detailPage/components/ProgramCard'
import { page_layout } from '@/program/styles/pagelayout.css'
import React from 'react'

export default function page() {
  return (
    <div className={page_layout}>
      <ProgramCard />
    </div>
  )
}
