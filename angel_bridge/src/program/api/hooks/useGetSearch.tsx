'use client'
import { useQuery } from '@tanstack/react-query'
import { getSearch } from '../utils/getSearch'

interface SearchParams {
  keyword: string
  page: number
  status: string
}

export default function useSearch({ keyword, page, status }: SearchParams) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['searchPrograms', { keyword, page, status }],
    queryFn: () => getSearch({ keyword, page, status }),
    enabled: !!keyword,
  })

  return { data, isLoading, isError }
}
