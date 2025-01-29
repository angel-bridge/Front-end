import { authInstance } from '@/api/authInstance'

export const getPayments = async ({ page = 1 }) => {
  const response = await authInstance.get(`/api/v1/payments`, {
    params: { page },
  })
  return response.data.result
}
