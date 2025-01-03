import React from 'react'
import RecrutingBtn from './RecrutingBtn'
import WillRecruteBtn from './WillRecruteBtn.tsx'
import Search from './Search'

export default function ProgramHeader() {
  return (
    <div>
      <div>
        <RecrutingBtn />
        <WillRecruteBtn />
      </div>

      <Search />
    </div>
  )
}
