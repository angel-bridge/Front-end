'use client'
import { useQuery } from '@tanstack/react-query'
import { getDetailProgram } from '../utils/getDetailProgram'

export default function useGetDetailProgram({
  educationId,
}: {
  educationId: number
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['searchPrograms', { educationId }],
    queryFn: () => getDetailProgram({ educationId }),
  })

  return { data, isLoading, isError }
}
