import React from 'react'
import ProgramHeader from './components/header/ProgramHeader'
import MainProgram from './components/main/MainProgram'
import { page_compo_container } from './styles/pageCompo.css'

export default function PageComp() {
  return (
    <div className={page_compo_container}>
      <ProgramHeader />
      <MainProgram />
    </div>
  )
}
