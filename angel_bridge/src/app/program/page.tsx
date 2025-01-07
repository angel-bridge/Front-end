import React from 'react'
import Header from '../home/components/Header'
import Banner from '../home/components/Banner'
import PageComp from '@/program/PageComp'
import { page_layout } from '@/program/styles/pagelayout.css'

export default function page() {
  return (
    <>
      <Header />
      <Banner />
      <main className={page_layout}>
        <PageComp />
      </main>
    </>
  )
}
