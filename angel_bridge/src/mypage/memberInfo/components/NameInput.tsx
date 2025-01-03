'use client'
import React, { useState } from 'react'
import {
  error_container,
  input,
  input_tag,
  inputwithtag_container,
} from '../styles/input.css'
import { label } from '../styles/info.css'

import ErrorMessage from './ErrorMessage'

export default function NameInput() {
  const [value, setValue] = useState('')
  const [isError, setIsError] = useState(false)

  function handleValueError() {
    if (value.length > 10) {
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
      <p className={input_tag}>닉네임 *</p>
      <input
        placeholder="팬더"
        className={input}
        onChange={handleInputChange}
      />
      <div className={error_container}>
        {isError && <ErrorMessage number={0} />}

        <p className={label}>
          {value ? value.length : 2}
          /10
        </p>
      </div>
    </div>
  )
}
