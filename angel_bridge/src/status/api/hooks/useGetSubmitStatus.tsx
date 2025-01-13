'use client'
import { useQuery } from '@tanstack/react-query'
import { getSubmitStatus } from '../utils/getSubmitStatus'

export default function useGetSubmitStatus(
  educationId: number,
  assignmentId: number,
  status: string,
) {
  const { data } = useQuery({
    queryKey: ['getSubmitStatus', { educationId, assignmentId, status }],
    queryFn: () => getSubmitStatus(educationId, assignmentId, status),
  })
  return { data }
}
