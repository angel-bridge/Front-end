'use client'
import { getIndividualMission } from '../utils/getIndividualMission'
import { useQuery } from '@tanstack/react-query'

export default function useGetIndividualMission({
  assignmentId,
  status,
}: {
  assignmentId: number
  status: string
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getIndividualMission', { assignmentId, status }],
    queryFn: () => getIndividualMission({ assignmentId, status }),
  })
  return { data, isLoading, isError }
}
