import { authInstance } from '@/api/authInstance'

interface postSaveAmountResponse {
  timestamp: string
  code: number
  message: string
}

export const postSaveAmount = async (orderId: string, amount: number) => {
  const response: postSaveAmountResponse = await authInstance.post(
    `/api/v1/payments/saveAmount`,
    {
      orderId,
      amount,
    },
  )
  return response
}
