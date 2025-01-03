/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import { input, input_tag, inputwithtag_container } from '../styles/input.css'
import ErrorMessage from './ErrorMessage'
import { InputPropTypes } from '../types/inputProps'

export default function EmailInput(props: InputPropTypes) {
  const { value, onChange, setIsError, isError } = props
  const email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/

  useEffect(() => {
    if (value && email.test(value) === false) {
      setIsError(true)
    } else {
      setIsError(false)
    }
  }, [value])

  return (
    <div className={inputwithtag_container}>
      <p className={input_tag}>이메일 주소 *</p>
      <input
        onChange={onChange}
        placeholder="sadfdsfsdf@adsfsd.com"
        className={input}
      />
      {value && isError && <ErrorMessage number={2} />}
    </div>
  )
}
