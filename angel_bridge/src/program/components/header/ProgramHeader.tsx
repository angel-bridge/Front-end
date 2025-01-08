import React from 'react'
import RecrutingBtn from './RecrutingBtn'
import WillRecruteBtn from './WillRecruteBtn.tsx'
import Search from './Search'
import { button_container } from '@/program/styles/button.css'
import { header_style } from '@/program/styles/header.css'

interface ProgramHeaderProps {
  handleClickOngoing: () => void
  handleClickUpcoming: () => void
  isClickOngoing: boolean
  isClickUpcoming: boolean
}

export default function ProgramHeader(props: ProgramHeaderProps) {
  const {
    handleClickOngoing,
    handleClickUpcoming,
    isClickOngoing,
    isClickUpcoming,
  } = props
  return (
    <div className={header_style}>
      <div className={button_container}>
        <RecrutingBtn
          isClickOngoing={isClickOngoing}
          handleClickOngoing={handleClickOngoing}
        />
        <WillRecruteBtn
          isClickUpcoming={isClickUpcoming}
          handleClickUpcoming={handleClickUpcoming}
        />
      </div>

      <Search />
    </div>
  )
}
