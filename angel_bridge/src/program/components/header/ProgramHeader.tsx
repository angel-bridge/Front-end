import React from 'react'
import RecrutingBtn from './RecrutingBtn'
import WillRecruteBtn from './WillRecruteBtn.tsx'
import Search from './Search'
import { button_container } from '@/program/styles/button.css'

export default function ProgramHeader() {
  return (
    <div>
      <div className={button_container}>
        <RecrutingBtn />
        <WillRecruteBtn />
      </div>

      <Search />
    </div>
  )
}
