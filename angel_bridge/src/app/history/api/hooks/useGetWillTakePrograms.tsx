'use client'
import { useQuery } from '@tanstack/react-query'
import { getWillTakePrograms } from '../utils/getWillTakePrograms'

export default function useGetWillTakePrograms({ page }: { page: number }) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['willTakePrograms', page],
        queryFn: () => getWillTakePrograms({ page }),
        staleTime: 2000,
    })
    return { data, isLoading, isError }
}