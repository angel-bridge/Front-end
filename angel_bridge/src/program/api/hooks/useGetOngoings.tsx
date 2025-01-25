'use client'
import { useQuery } from '@tanstack/react-query'
import { getOngoingProgram } from '../utils/getOngoingPrograms'

export default function useGetOngoings() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['OngoingProgram'],
    queryFn: getOngoingProgram,
  })
  return { data, isLoading, isError }
}
