import React from 'react'
import PageComp from '@/program/PageComp'
import { page_layout } from '@/program/styles/pagelayout.css'
import ProgramBanner from '@/program/components/header/ProgramBanner'

export default function page() {
  return (
    <>
      <ProgramBanner />
      <main className={page_layout}>
        <PageComp />
      </main>
    </>
  )
}
