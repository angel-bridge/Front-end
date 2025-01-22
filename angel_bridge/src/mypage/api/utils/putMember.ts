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
  updatedData: PutMemberData,
  newImage: string | undefined,
): Promise<CancelResponse> => {
  const formData = new FormData()

  if (updatedData) {
    const jsonBlob = new Blob([JSON.stringify(updatedData)], {
      type: 'application/json',
    })
    formData.append('data', jsonBlob)
  }

  if (newImage) {
    formData.append('profileImage', newImage)
  }

  // Axios PUT 요청
  const response: CancelResponse = await authInstance.put(
    `/api/v1/member`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  )

  return response
}
