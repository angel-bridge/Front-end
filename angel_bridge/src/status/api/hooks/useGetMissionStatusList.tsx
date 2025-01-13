'use client'
import { getMissionStatusList } from '../utils/getMissionStatusList'
import { useQuery } from '@tanstack/react-query'

export default function useGetMissionStatusList() {
  const { data } = useQuery({
    queryKey: ['getMissionStatusList'],
    queryFn: () => getMissionStatusList,
  })
  return { data }
}
