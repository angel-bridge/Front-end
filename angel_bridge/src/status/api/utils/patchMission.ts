//미션 제출 현황 card 하나씩 클릭할 때

import { authInstance } from '@/api/authInstance'

export interface patchMission {
  assignmentId: number
  round: number
  title: string
  description: string
  submissionLink: string
  status: string
}

interface SubmitStatusResponse {
  timestamp: string
  code: number
  message: string
  result: patchMission
}

//status page Upper Box 부분
export const patchMission = async (
  educationId: string,
  assignmentId: number,
  submissionLink: string,
) => {
  const response = await authInstance.patch(
    `/api/v1/education/${educationId}/assignment/${assignmentId}/submit`,
    {
      submissionLink: submissionLink,
    },
  )

  const data: SubmitStatusResponse = response?.data
  return data
}
