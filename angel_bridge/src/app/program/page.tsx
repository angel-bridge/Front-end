import React from 'react'
import Banner from '../home/components/Banner'
import PageComp from '@/program/PageComp'
import { page_layout } from '@/program/styles/pagelayout.css'

export default function page() {
  return (
    <>
      <Banner />
      <main className={page_layout}>
        <PageComp />
      </main>
    </>
  )
}
