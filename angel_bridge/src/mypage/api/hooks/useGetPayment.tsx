'use client'
import { useQuery } from '@tanstack/react-query'
import { getPayments } from '../utils/getPayments'

export default function useGetPayment({ page }: { page: number }) {
  const { data, isLoading } = useQuery({
    queryKey: ['getPayments', page],
    queryFn: () => getPayments({ page }),
  })

  return { data, isLoading }
}
