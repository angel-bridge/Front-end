import { authInstance } from '@/api/authInstance'

export interface Member {
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

interface MemberData {
  timestamp: string
  code: number
  message: string
  result: Member
}

interface MemberResponse {
  data: MemberData
}

export const getMember = async () => {
  const response: MemberResponse = await authInstance.get(`/api/v1/member`)
  return response?.data?.result
}