'use client'
import React, { useState } from 'react'
import ProgramHeader from './components/header/ProgramHeader'
import MainProgram from './components/main/MainProgram'
import { page_compo_container } from './styles/pageCompo.css'

export default function PageComp() {
  const [isClickUpcoming, setIsClickUpcoming] = useState(false)
  const [isClickOngoing, setIsClickOngoing] = useState(false)

  function handleClickUpcoming() {
    setIsClickUpcoming(!isClickUpcoming)
  }

  function handleClickOngoing() {
    setIsClickOngoing(!isClickOngoing)
  }
  return (
    <div className={page_compo_container}>
      <ProgramHeader
        isClickOngoing={isClickOngoing}
        isClickUpcoming={isClickUpcoming}
        handleClickUpcoming={handleClickUpcoming}
        handleClickOngoing={handleClickOngoing}
      />
      <MainProgram />
    </div>
  )
}
