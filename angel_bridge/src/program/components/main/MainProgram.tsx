import React from 'react'
import Programs from './Programs'
import { DUMMY_DATA } from './dummy'
import { length_style } from './styles/programmain.css'

export default function MainProgram() {
  return (
    <div>
      <p className={length_style}>전체 {DUMMY_DATA.length}개</p>
      <Programs />
    </div>
  )
}
