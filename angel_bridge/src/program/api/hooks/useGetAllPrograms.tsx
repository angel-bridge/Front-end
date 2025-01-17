'use client'
import { useQuery } from '@tanstack/react-query'
import { getAllPrograms } from '../utils/getAllProgram'

export default function useGetAllPrograms({ page }: { page: number }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['allPrograms', { page }],
    queryFn: () => getAllPrograms({ page }),
    staleTime: 2000,
  })
  return { data, isLoading, isError }
}
