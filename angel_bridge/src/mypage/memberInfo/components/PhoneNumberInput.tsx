import React, { useState } from 'react'
import { input, input_tag, inputwithtag_container } from '../styles/input.css'
import ErrorMessage from './ErrorMessage'

export default function PhoneNumberInput() {
  const [value, setValue] = useState('')
  const [isError, setIsError] = useState(false)

  function handleValueError() {
    const phoneNum = value.replace(/-/g, '')
    const isPhoneNum = value.match(/-/g)?.length
    if (isPhoneNum) {
      if (isPhoneNum < 3) {
        setIsError(true)
      }
    } else if (phoneNum.length != 11) {
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
      <p className={input_tag}>전화번호 *</p>
      <input
        onChange={handleInputChange}
        placeholder="010-1234-1234"
        className={input}
      />
      {isError && <ErrorMessage number={1} />}
    </div>
  )
}
