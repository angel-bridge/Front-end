import { authInstance } from '@/api/authInstance'

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
  const response: MmeberResponse = await authInstance.get(`/api/v1/member`)
  return response.result
}
