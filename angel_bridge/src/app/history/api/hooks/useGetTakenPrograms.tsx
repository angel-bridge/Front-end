'use client'
import { useQuery } from '@tanstack/react-query'
import { getTakenPrograms } from '../utils/getTakenPrograms'

export default function useGetTakenPrograms({ page }: { page: number }) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['takenPrograms', { page }],
        queryFn: () => getTakenPrograms({ page }),
        staleTime: 2000,
    })
    return { data, isLoading, isError }
}
