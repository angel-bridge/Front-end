import { authInstance } from '@/api/authInstance'

export const getPayments = async () => {
  const response = await authInstance.get(`/api/v1/payments`)
  return response.data.result
}
