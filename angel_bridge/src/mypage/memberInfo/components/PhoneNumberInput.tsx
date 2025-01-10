'use client'
import React, { useEffect } from 'react'
import { input, input_tag, inputwithtag_container } from '../styles/input.css'
import ErrorMessage from './ErrorMessage'
import { InputPropTypes } from '../types/inputProps'

export default function PhoneNumberInput(props: InputPropTypes) {
  const { value, onChange, isError, setIsError } = props
  const pattern = /^(010|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/

  useEffect(() => {
    if (value && pattern.test(value) === false) {
      setIsError(true)
    } else {
      setIsError(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

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
