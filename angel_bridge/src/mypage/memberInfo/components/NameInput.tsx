'use client'
import React, { useState } from 'react'
import {
  error_case,
  input,
  input_tag,
  inputwithtag_container,
} from '../styles/input.css'
import { label } from '../styles/info.css'

import Error from '../assets/error.svg'

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
      {isError && (
        <p className={error_case}>공백 포함 10자 이내로 입력해주세요</p>
      )}

      <p className={label}>
        {value ? value.length : 2}
        /10
      </p>
    </div>
  )
}
