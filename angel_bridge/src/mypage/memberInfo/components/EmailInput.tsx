import React, { useState } from 'react'
import { input, input_tag, inputwithtag_container } from '../styles/input.css'
import ErrorMessage from './ErrorMessage'

export default function EmailInput() {
  const [value, setValue] = useState('')
  const [isError, setIsError] = useState(false)

  function handleValueError() {
    const email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/

    if (email.test(value) === false) {
      setIsError(true)
    } else {
      setIsError(false)
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
    handleValueError()
  }

  return (
    <div className={inputwithtag_container}>
      <p className={input_tag}>이메일 주소 *</p>
      <input
        onChange={handleInputChange}
        placeholder="sadfdsfsdf@adsfsd.com"
        className={input}
      />
      {isError && <ErrorMessage number={2} />}
    </div>
  )
}
