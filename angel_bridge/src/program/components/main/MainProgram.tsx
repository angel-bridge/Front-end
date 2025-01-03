import React from 'react'
import Programs from './Programs'
import { DUMMY_DATA } from './dummy'

export default function MainProgram() {
  return (
    <div>
      <p>전체 {DUMMY_DATA.length}개</p>
      <Programs />
    </div>
  )
}
