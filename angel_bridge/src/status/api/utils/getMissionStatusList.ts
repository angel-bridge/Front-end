//미션 제출 현황 card 하나씩 클릭할 때

import { instance } from '@/api/instance'

interface Assignment {
  assignmentId: number
  round: number
  startTime: string
  endTime: string
  assignmentStatus: string
  attendanceStatus: string
}

interface SubmitStatusResult {
  total: number
  pageNum: number
  totalPages: number
  asisgnments: Assignment[]
}

interface SubmitStatusResponse {
  timestamp: string
  code: number
  message: string
  result: SubmitStatusResult
}

//status page Upper Box 부분
export const getMissionStatusList = async (
  educationId: number,
  page: number,
) => {
  const response: SubmitStatusResponse = await instance.get(
    `/api/v1/education/${educationId}/assignment`,
    {
      params: { page },
    },
  )
  return response.result
}
