import { authInstance } from '@/api/authInstance'

interface CancelResponse {
  timestamp: string
  code: number
  message: string
}

export type PutMemberData = {
  nickname: string
  email: string
  phoneNumber: string
}

export const putMember = async (
  data: PutMemberData,
  profileImage: string | null,
) => {
  const response: CancelResponse = await authInstance.put(`/api/v1/member`, {
    ...data,
    profileImage,
  })
  return response
}
