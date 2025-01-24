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

//회원정보
export default function Info() {
  const { data, isLoading } = useGetMember()
  const { mutate } = usePutMember()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [image, setIsImage] = useState('')

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
  })

  const [isChange, setIsChange] = useState(false)

  useEffect(() => {
    console.log(data)
  })

  useEffect(() => {
    if (data) {
      setName(data.nickname || '')
      setPhone(data.phoneNumber || '')
      setEmail(data.email || '')
      setIsImage(data.profileImageUrl || '')
    }
  }, [data])

  useEffect(() => {
    const hasChanges =
      name != data?.nickname ||
      phone != data?.phoneNumber ||
      email != data?.email ||
      image != data?.profileImageUrl
    const hasErrors = Object.values(errors).some((error) => {
      return error === true
    })
    setIsChange(hasChanges && !hasErrors)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, name, phone, errors, isChange, image])

  function handleErrorUpdate(field: string, isError: boolean) {
    setErrors((prev) => ({ ...prev, [field]: isError }))
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleImageUplaod(file: any) {
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

  if (isLoading) return <p>loading....</p>

  return (
    <div className={container}>
      {data && (
        <>
          <Photo
            kakaoImg={data?.profileImageUrl}
            image={image}
            handleImageUplaod={handleImageUplaod}
          />
          <div className={Info_container}>
            <NameInput
              apiValue={data?.nickname}
              setIsError={(isError: boolean) =>
                handleErrorUpdate('name', isError)
              }
              isError={errors.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <PhoneNumberInput
              apiValue={data?.phoneNumber}
              isError={errors.phone}
              setIsError={(isError: boolean) =>
                handleErrorUpdate('phone', isError)
              }
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <EmailInput
              apiValue={data?.email}
              setIsError={(isError: boolean) =>
                handleErrorUpdate('email', isError)
              }
              isError={errors.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </>
      )}

      <SaveChangeBtn onClick={handleSaveBtn} isChange={isChange} />
    </div>
  )
}
