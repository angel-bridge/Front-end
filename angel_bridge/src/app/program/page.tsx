import React from 'react'
import Header from '../home/components/Header'
import Banner from '../home/components/Banner'
import PageComp from '@/program/PageComp'

export default function page() {
  return (
    <div>
      <Header />
      <Banner />

      <PageComp />
    </div>
  )
}
