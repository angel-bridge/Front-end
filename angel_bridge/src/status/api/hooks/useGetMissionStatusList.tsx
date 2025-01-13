'use client'
import { getMissionStatusList } from '../utils/getMissionStatusList'
import { useQuery } from '@tanstack/react-query'

export default function useGetMissionStatusList(
  educationId: number,
  page: number,
) {
  const { data } = useQuery({
    queryKey: ['getMissionStatusList', { educationId, page }],
    queryFn: () => getMissionStatusList(educationId, page),
  })
  return { data }
}
