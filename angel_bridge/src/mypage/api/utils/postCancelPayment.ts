import { instance } from '@/api/instance'

interface CancelResponse {
  timestamp: string
  code: number
  message: string
}

export const postCancelPayments = async (
  educationId: number,
  cancelReason: string = '마음이 바뀌어서 결제 취소합니다',
) => {
  const response: CancelResponse = await instance.post(
    `/api/v1/payments/cancel/${educationId}`,
    {
      cancelReason,
    },
  )
  return response
}
