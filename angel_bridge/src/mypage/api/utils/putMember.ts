import { instance } from '@/api/instance'

interface CancelResponse {
  timestamp: string
  code: number
  message: string
}

export const postCancelPayments = async (
  data: {
    nickname: string
    email: string
    phoneNumber: string
  },
  profileImage: string | null,
) => {
  const response: CancelResponse = await instance.put(`/api/v1/member`, {
    ...data,
    profileImage,
  })
  return response
}
