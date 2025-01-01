import React from 'react'
import Date from './text/Date'
import IsPaid from './text/IsPaid'
import Title from './text/Title'
import Price from './text/Price'
import { texts_container } from '../styles/texts.css'

export default function Texts() {
  return (
    <div className={texts_container}>
      <Date />
      <IsPaid />
      <Title />
      <Price />
    </div>
  )
}
