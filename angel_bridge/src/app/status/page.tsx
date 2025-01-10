'use client'
import UpperFrame from '@/status/components/UpperFrame'
import React, { useState } from 'react'
import Header from '../home/components/Header'
import { layout } from './pagelayout.css'
import BottomFrame from '@/status/components/BottomFrame'
import { vars } from '@/style/theme.css'

export default function page() {
  function handleModalOpen() {
    setIsModalOpen(true)
  }

  return (
    <div>
      <Header />
      <div className={layout}>
        <UpperFrame handleModalOpen={handleModalOpen} />
        <BottomFrame />
      </div>
    </div>
  )
}
