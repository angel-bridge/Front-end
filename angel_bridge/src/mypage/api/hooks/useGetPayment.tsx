'use client'
import { useQuery } from '@tanstack/react-query'
import { getPayments } from '../utils/getPayments'

export default function useGetPayment() {
  const { data, isLoading } = useQuery({
    queryKey: ['getPayments'],
    queryFn: () => getPayments(),
  })

  return { data, isLoading }
}
