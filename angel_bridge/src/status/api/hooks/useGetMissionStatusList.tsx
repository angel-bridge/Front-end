'use client'
import { getMissionStatusList } from '../utils/getMissionStatusList'
import { useQuery } from '@tanstack/react-query'

export default function useGetMissionStatusList(
  educationId: string | string[] | undefined,
  page: number,
) {
  const { data } = useQuery({
    queryKey: ['getMissionStatusList', educationId, page],
    queryFn: () => getMissionStatusList(educationId, page),
  })
  return { data }
}
