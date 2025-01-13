//미션 제출 현황 card 하나씩 클릭할 때

import { instance } from '@/api/instance'

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
  educationId: number,
  assignmentId: number,
  status: string,
) => {
  const response: SubmitStatusResponse = await instance.get(
    `/api/v1/education/${educationId}/assignment/${assignmentId}`,
    {
      params: { status },
    },
  )
  return response.result
}
