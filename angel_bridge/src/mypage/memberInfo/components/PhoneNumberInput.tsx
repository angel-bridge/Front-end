import React, { useEffect, useState } from 'react'
import { input, input_tag, inputwithtag_container } from '../styles/input.css'
import ErrorMessage from './ErrorMessage'

export default function PhoneNumberInput() {
  const [value, setValue] = useState('')
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const phoneNum = value.replace(/-/g, '')
    const isPhoneNumValid = /^010-\d{4}-\d{4}$/.test(value)

    if (phoneNum.length === 11 && isPhoneNumValid) {
      setIsError(false)
    } else {
      setIsError(true)
    }
  }, [value])

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
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
