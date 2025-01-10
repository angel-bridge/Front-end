import React from 'react'
import Date from './text/Date'
import IsPaid from './text/IsPaid'
import Title from './text/Title'
import Price from './text/Price'
import { texts_container } from '../styles/texts.css'

interface TextsProps {
  date: string
  ispaid: boolean
  title: string
  price: string
}

export default function Texts(props: TextsProps) {
  const { date, ispaid, title, price } = props
  return (
    <div className={texts_container}>
      <Date date={date} />
      <IsPaid ispaid={ispaid} />
      <Title title={title} />
      <Price price={price} />
    </div>
  )
}
