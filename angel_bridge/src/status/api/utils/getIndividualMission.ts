import { authInstance } from '@/api/authInstance'

interface IndividualMissionResult {
  assignmentId: number
  round: number
  title: string
  description: string
  submissionLink: string
  status: string
}

interface IndividualMission {
  timestamp: string
  code: number
  message: string
  result?: IndividualMissionResult
}

export const getIndividualMission = async ({
  assignmentId,
  status,
}: {
  assignmentId: number
  status: string
}) => {
  const response: IndividualMission = await authInstance.get(
    `/api/v1/education/{educationId}/assignment/${assignmentId}`,
    {
      params: { status },
    },
  )
  return response.result
}
