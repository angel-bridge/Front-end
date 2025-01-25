'use client'
import { useQuery } from '@tanstack/react-query'
import { getTakingPrograms } from '../utils/getTakingPrograms'

export default function useGetTakingPrograms({ page }: { page: number }) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['takingPrograms', { page }],
        queryFn: () => getTakingPrograms({ page }),
        staleTime: 2000,
    })
    return { data, isLoading, isError }
}
