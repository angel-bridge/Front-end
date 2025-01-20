import { authInstance } from '@/api/authInstance'

export interface CompleteCancled {
  enrollementId: number
  imageUrl: string
  educationName: string
  price: string
  approvedAt: string
}

export interface Payment {
  canceled: CompleteCancled[]
  complete: CompleteCancled[]
}

interface PaymentResponse {
  timestamp: string
  code: number
  message: string
  result: Payment
}

export const getPayments = async () => {
  const response: PaymentResponse = await authInstance.get(`/api/v1/payments`)
  return response.result
}
