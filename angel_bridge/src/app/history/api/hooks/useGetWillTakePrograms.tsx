'use client'
import { useQuery } from '@tanstack/react-query'
import { getWillTakePrograms } from '../utils/getWillTakePrograms'

export default function useGetWillTakePrograms({ page }: { page: number }) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['willTakePrograms', page],
        queryFn: async () => {
                    const result = await getWillTakePrograms({ page });
                    console.log('Fetched result:', result);
                    return result;
                },
        staleTime: 2000,
    })
    return { data, isLoading, isError }
}