//미션 제출 현황 card 하나씩 클릭할 때

import { authInstance } from '@/api/authInstance'

export interface SubmitStatusResult {
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
  result: SubmitStatusResult
}

//status page Upper Box 부분
export const getSubmitStatus = async (
  educationId: string,
  assignmentId: number,
  status: string,
) => {
  const response = await authInstance.get(
    `/api/v1/education/${educationId}/assignment/${assignmentId}`,
    {
      params: { status },
    },
  )

  const data: SubmitStatusResponse = response?.data
  return data?.result
}
