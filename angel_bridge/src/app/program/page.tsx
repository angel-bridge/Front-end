import React from 'react'
import PageComp from '@/program/PageComp'
import { page_layout } from '@/program/styles/pagelayout.css'
import ProgramBanner from '@/program/components/header/ProgramBanner'

export default function page() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ProgramBanner />
      <div className={page_layout}>
        <PageComp />
      </div>
    </main>
  )
}
