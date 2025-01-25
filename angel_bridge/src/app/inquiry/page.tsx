import React from 'react'
import { layout } from './pagelayout.css'
import PageComponent from '@/inquiry/components/PageComponent'

export default function page() {
  return (
    <>
      <div className={layout}>
        <PageComponent />
      </div>
    </>
  )
}
