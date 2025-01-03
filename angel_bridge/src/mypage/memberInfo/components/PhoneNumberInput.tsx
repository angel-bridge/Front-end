'use client'
import React, { useEffect, useState } from 'react'
import { input, input_tag, inputwithtag_container } from '../styles/input.css'
import ErrorMessage from './ErrorMessage'
import { InputPropTypes } from '../types/inputProps'

export default function PhoneNumberInput(props: InputPropTypes) {
  const { value, onChange } = props
  const [isError, setIsError] = useState(false)
  const pattern = /^(010|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/

  useEffect(() => {
    console.log(value)
    console.log(isError)
    if (pattern.test(value) === false) {
      setIsError(true)
    } else {
      setIsError(false)
    }
  }, [value, isError])

  return (
    <div className={inputwithtag_container}>
      <p className={input_tag}>전화번호 *</p>
      <input
        onChange={onChange}
        placeholder="010-1234-1234"
        className={input}
      />
      {value && isError && <ErrorMessage number={1} />}
    </div>
  )
}
