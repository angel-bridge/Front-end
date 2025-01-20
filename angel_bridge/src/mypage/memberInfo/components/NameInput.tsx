'use client'
import React, { useEffect } from 'react'
import {
  error_container,
  input,
  input_tag,
  inputwithtag_container,
  name_error_container,
} from '../styles/input.css'
import { label } from '../styles/info.css'

import ErrorMessage from './ErrorMessage'
import { InputPropTypes } from '../types/inputProps'

export default function NameInput(props: InputPropTypes) {
  const { value, onChange, isError, setIsError, apiValue } = props

  useEffect(() => {
    if (value.length > 10) {
      setIsError(true)
    } else {
      setIsError(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <div className={inputwithtag_container}>
      <p className={input_tag}>닉네임 *</p>
      <input placeholder={apiValue} className={input} onChange={onChange} />
      <div className={!isError ? name_error_container : error_container}>
        {isError && <ErrorMessage number={0} />}
        <p className={label}>
          {value ? value.length : 2}
          /10
        </p>
      </div>
    </div>
  )
}
