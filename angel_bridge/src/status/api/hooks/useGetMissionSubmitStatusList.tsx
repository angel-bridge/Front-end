'use client'
import { useQuery } from '@tanstack/react-query'
import { getMissionSubmitStatusList } from '../utils/getMissionSubmitStatusList'

export default function useGetMissionSubmitStatusList({
  page = 1,
  educationId,
}: {
  page: number
  educationId: number
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getMissionSubmitStatusList', { educationId, page }],
    queryFn: () => getMissionSubmitStatusList({ educationId, page }),
  })
  return { data, isLoading, isError }
}
