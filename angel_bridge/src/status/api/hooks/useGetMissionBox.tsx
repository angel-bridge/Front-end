'use client'
import { getMissionBox } from '../utils/getMissionBox'
import { useQuery } from '@tanstack/react-query'

export default function useGetMissionBox({
  educationId,
}: {
  educationId: number
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getMissionBox', { educationId }],
    queryFn: () => getMissionBox({ educationId }),
  })
  return { data, isLoading, isError }
}
