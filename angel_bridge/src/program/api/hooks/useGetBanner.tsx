'use client'
import { useQuery } from '@tanstack/react-query'
import { getBanner } from '../utils/getBanner'

export default function useGetBanner({ educationId }: { educationId: string }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['detailProgram', educationId],
    queryFn: () => getBanner(),
  })

  return { data, isLoading, isError }
}
