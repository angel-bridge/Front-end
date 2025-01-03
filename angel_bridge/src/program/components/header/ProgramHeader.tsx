import React from 'react'
import RecrutingBtn from './RecrutingBtn'
import WillRecruteBtn from './WillRecruteBtn.tsx'
import Search from './Search'
import { button_container } from '@/program/styles/button.css'
import { header_style } from '@/program/styles/header.css'

export default function ProgramHeader() {
  return (
    <div className={header_style}>
      <div className={button_container}>
        <RecrutingBtn />
        <WillRecruteBtn />
      </div>

      <Search />
    </div>
  )
}
