'use client'
import { useQuery } from '@tanstack/react-query'
import { getMissionBox } from '../utils/getMissionBox'

export default function useGetMissionBox(
  educationId: string | string[] | undefined,
) {
  const { data } = useQuery({
    queryKey: ['getMissionBox', { educationId }],
    queryFn: () => getMissionBox(educationId),
  })
  return { data }
}
