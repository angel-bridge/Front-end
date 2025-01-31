import { authInstance } from '@/api/authInstance'

interface CancelResponse {
  timestamp: string
  code: number
  message: string
}

export const postCancelPayments = async (
  enrollmentId: number,
  cancelReason: string = '마음이 바뀌어서 결제 취소합니다',
) => {
  const response: CancelResponse = await authInstance.post(
    `/api/v1/payments/cancel/${enrollmentId}`,
    {
      cancelReason: cancelReason,
    },
  )
  return response
}
