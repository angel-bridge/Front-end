'use client'
import SuccessPage from '@/payments/SuccessPage'
import React, { Suspense } from 'react'

export default function page() {
  return (
    <div>
      <Suspense>
        <SuccessPage />
      </Suspense>
    </div>
  )
}
