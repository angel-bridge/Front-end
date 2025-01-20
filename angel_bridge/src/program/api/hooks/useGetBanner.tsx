'use client'
import { useQuery } from '@tanstack/react-query'
import { getBanner } from '../utils/getBanner'

export default function useGetBanner() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getBanner'],
    queryFn: () => getBanner(),
  })

  return { data, isLoading, isError }
}
