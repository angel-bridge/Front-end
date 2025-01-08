'use client'
import { useQuery } from '@tanstack/react-query'
import { getAllPrograms } from '../utils/getAllProgram'

export default function useGetAllPrograms() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['allPrograms'],
    queryFn: getAllPrograms,
  })
  return { data, isLoading, isError }
}
