'use client'
import React, { useEffect, useState } from 'react'
import { container, Info_container } from '../styles/info.css'
import Photo from './Photo'
import SaveChangeBtn from './SaveChangeBtn'
import NameInput from './NameInput'
import PhoneNumberInput from './PhoneNumberInput'
import EmailInput from './EmailInput'

export default function Info() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
  })

  const [isChange, setIsChange] = useState(false)

  useEffect(() => {
    const hasChanges = name != '' || phone != '' || email != ''
    const hasErrors = Object.values(errors).some((error) => {
      return error === true
    })
    setIsChange(hasChanges && !hasErrors)

    console.log(hasErrors, isChange)
  }, [email, name, phone, errors, isChange])

  function handleErrorUpdate(field: string, isError: boolean) {
    setErrors((prev) => ({ ...prev, [field]: isError }))
  }

  return (
    <div className={container}>
      <Photo />
      <div className={Info_container}>
        <NameInput
          setIsError={(isError: boolean) => handleErrorUpdate('name', isError)}
          isError={errors.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <PhoneNumberInput
          isError={errors.phone}
          setIsError={(isError: boolean) => handleErrorUpdate('phone', isError)}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <EmailInput
          setIsError={(isError: boolean) => handleErrorUpdate('email', isError)}
          isError={errors.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <SaveChangeBtn isChange={isChange} />
    </div>
  )
}
