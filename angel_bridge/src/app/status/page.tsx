'use client'
import UpperFrame from '@/status/components/UpperFrame'
import React, { useState } from 'react'
import { layout } from './pagelayout.css'
import BottomFrame from '@/status/components/BottomFrame'
import { vars } from '@/style/theme.css'
import Modal from '@/status/components/modal/Modal'

export default function page() {
  return (
    <div>
      <div className={layout}>
        <UpperFrame />
        <BottomFrame />
      </div>
    </div>
  )
}
