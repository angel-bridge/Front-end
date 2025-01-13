'use client'
import { useQuery } from '@tanstack/react-query'
import { getSubmitStatus } from '../utils/getSubmitStatus'

export default function useGetSubmitStatus() {
  const { data } = useQuery({
    queryKey: ['getSubmitStatus'],
    queryFn: () => getSubmitStatus,
  })
  return { data }
}
