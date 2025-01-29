import Image from 'next/image'
import React from 'react'
import loading from '@/app/assets/loading.gif'

export default function Loading() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '10',
        height: '100%',
        backgroundColor: ' #FFF',
        width: '100%',
      }}
    >
      <div style={{ position: 'relative', width: '12rem', height: '12rem' }}>
        <Image src={loading} alt="로딩뷰" fill />
      </div>
    </div>
  )
}
