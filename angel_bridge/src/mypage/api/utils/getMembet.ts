import { instance } from '@/api/instance'

export interface Mmeber {
  memberId: number
  nickname: string
  email: string
  profileImageUrl: string
  profileImageType: string
  phoneNumber: string
  role: string
  isSelect: boolean
  isRegistered: boolean
}

interface MmeberResponse {
  timestamp: string
  code: number
  message: string
  result: Mmeber
}

export const getMember = async () => {
  const response: MmeberResponse = await instance.get(`/api/v1/member`)
  return response.result
}
