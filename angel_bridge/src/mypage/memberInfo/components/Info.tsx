'use client'
import React, { useEffect, useState } from 'react'
import { container, Info_container } from '../styles/info.css'
import Photo from './Photo'
import SaveChangeBtn from './SaveChangeBtn'
import NameInput from './NameInput'
import PhoneNumberInput from './PhoneNumberInput'
import EmailInput from './EmailInput'
import useGetMember from '@/mypage/api/hooks/useGetMember'
import usePutMember from '@/mypage/api/hooks/usePutMember'
import { PutMemberData } from '@/mypage/api/utils/putMember'
import exampleImg from '../assets/Avata.png'

//회원정보
export default function Info() {
  const { data } = useGetMember()
  const { mutate } = usePutMember()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [image, setIsImage] = useState(exampleImg)

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
  })

  const [isChange, setIsChange] = useState(false)

  useEffect(() => {
    const hasChanges = name != '' || phone != '' || email != '' || image != ''
    const hasErrors = Object.values(errors).some((error) => {
      return error === true
    })
    setIsChange(hasChanges && !hasErrors)
  }, [email, name, phone, errors, isChange, image])

  function handleErrorUpdate(field: string, isError: boolean) {
    setErrors((prev) => ({ ...prev, [field]: isError }))
  }

  function handleImageUplaod(file) {
    setIsImage(file)
  }

  function handleSaveBtn() {
    const updatedData: PutMemberData = {
      nickname: name !== '' ? name : data?.nickname || '',
      email: email !== '' ? email : data?.email || '',
      phoneNumber: phone !== '' ? phone : data?.phoneNumber || '',
    }

    // 실제 API 호출 부분
    mutate({ updatedData, newImage: image })
  }

  return (
    <div className={container}>
      <Photo
        kakaoImg={data?.profileImageUrl}
        image={image}
        handleImageUplaod={handleImageUplaod}
      />
      <div className={Info_container}>
        <NameInput
          apiValue={data?.nickname}
          setIsError={(isError: boolean) => handleErrorUpdate('name', isError)}
          isError={errors.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <PhoneNumberInput
          apiValue={data?.phoneNumber}
          isError={errors.phone}
          setIsError={(isError: boolean) => handleErrorUpdate('phone', isError)}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <EmailInput
          apiValue={data?.email}
          setIsError={(isError: boolean) => handleErrorUpdate('email', isError)}
          isError={errors.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <SaveChangeBtn onClick={handleSaveBtn} isChange={isChange} />
    </div>
  )
}
