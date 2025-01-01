import React from 'react'
import Content from './Content'
import { wrapper } from '../styles/container.css'

export default function Wrapper() {
  return (
    <div className={wrapper}>
      <Content />
    </div>
  )
}
