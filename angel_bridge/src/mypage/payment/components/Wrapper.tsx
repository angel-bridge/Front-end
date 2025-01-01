import React from 'react'
import Content, { ContentProps } from './Content'
import { wrapper } from '../styles/container.css'

const DUMMY_DATA: ContentProps[] = [
  {
    date: '2024.12.15',
    ispaid: true,
    title: '예비창업패키치 2주 완성',
    price: '150,000',
  },
  {
    date: '2024.12.15',
    ispaid: true,
    title: '예비창업패키치 2주 완성',
    price: '150,000',
  },
  {
    date: '2024.12.15',
    ispaid: true,
    title: '예비창업패키치 2주 완성',
    price: '150,000',
  },
  {
    date: '2024.12.15',
    ispaid: false,
    title: '예비창업패키치 2주 완성',
    price: '150,000',
  },
]

export default function Wrapper() {
  return (
    <div className={wrapper}>
      {DUMMY_DATA.map((data, index) => {
        return <Content key={index} {...data} />
      })}
    </div>
  )
}
