'use client'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getPayments } from '../utils/getPayments'

export default function useGetPayment() {
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getPayments'],
    queryFn: () => getPayments(),

    staleTime: 5 * 60 * 1000,
    initialData: queryClient.getQueryData(['getPayments']),
  })

  return { data, isLoading, isError }
}
