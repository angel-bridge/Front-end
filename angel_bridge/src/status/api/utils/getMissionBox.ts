import { authInstance } from '@/api/authInstance'

interface IndividualMissionResult {
  educationId: number
  assignmentId: number
  assignmentRound: number
  educationTitle: string
  assignmentTitle: string
  description: string
  assignmentLink: string
  performanceRate: number
  noticeLink: string
  methodLink: string
  isFinished: boolean
}

interface getMissionBox {
  timestamp: string
  code: number
  message: string
  result?: IndividualMissionResult
}

export const getMissionBox = async ({
  educationId,
}: {
  educationId: number
}) => {
  const response: getMissionBox = await authInstance.get(
    `/api/v1/education/${educationId}/assignment`,
  )
  return response.result
}
