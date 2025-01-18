'use client'
import { useQuery } from '@tanstack/react-query'
import { getUpcomingProgram } from '../utils/getUpcomingProgram'

export default function useGetUpcoming() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getUpcoming'],
    queryFn: getUpcomingProgram,
  })
  return { data, isLoading, isError }
}
