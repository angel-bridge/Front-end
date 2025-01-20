import { authInstance } from '@/api/authInstance'

export interface PaymentContent {
  enrollementId: number
  imageUrl: string
  educationName: string
  price: string
  status: string
  date: string
}

export interface Payment {
  total: number
  pageNum: number
  totalPages: number
  content: PaymentContent[]
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
