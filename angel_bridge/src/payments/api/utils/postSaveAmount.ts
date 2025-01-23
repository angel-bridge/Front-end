import { authInstance } from '@/api/authInstance'
import { AmountType } from '../hooks/usePostSaveAmount'

interface postSaveAmountResponse {
  timestamp: string
  code: number
  message: string
}

export const postSaveAmount = async (orderId: string, amount: AmountType) => {
  const response: postSaveAmountResponse = await authInstance.post(
    `/api/v1/payments/saveAmount`,
    {
      orderId,
      amount,
    },
  )
  return response
}
