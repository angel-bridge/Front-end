import React from 'react'
import { layout } from './pagelayout.css'
import PageComponent from '@/inquiry/components/PageComponent'
import Header from '../home/components/Header'

export default function page() {
  return (
    <>
      <Header />
      <div className={layout}>
        <PageComponent />
      </div>
    </>
  )
}
