'use client'
import { useQuery } from '@tanstack/react-query'
import { getMember } from '../utils/getMember'

export default function useGetMember() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getMember'],
    queryFn: () => getMember(),
  })

  return { data, isLoading, isError }
}
