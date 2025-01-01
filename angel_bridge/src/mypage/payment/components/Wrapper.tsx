import React from 'react'
import Photo from './Photo'
import Texts from './Texts'
import CancelBtn from './CancelBtn'

export default function Wrapper() {
  return (
    <div>
      <Photo />
      <Texts />
      <CancelBtn />
    </div>
  )
}
