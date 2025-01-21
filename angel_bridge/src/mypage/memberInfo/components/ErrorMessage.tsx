import React from 'react'
import ErrorImage from './ErrorImage'
import { error_case, error_style } from '../styles/input.css'
import { ERROR_MESSAGE } from '../core/error'

export default function ErrorMessage({ number }: { number: number }) {
  return (
    <div className={error_style}>
      <ErrorImage />
      <p className={error_case}>{ERROR_MESSAGE[number]}</p>
    </div>
  )
}
