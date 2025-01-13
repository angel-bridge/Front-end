'use client'
import { useQuery } from '@tanstack/react-query'
import { getMissionBox } from '../utils/getMissionBox'

export default function useGetMissionBox() {
  const { data } = useQuery({
    queryKey: ['getMissionBox'],
    queryFn: () => getMissionBox,
  })
  return { data }
}
