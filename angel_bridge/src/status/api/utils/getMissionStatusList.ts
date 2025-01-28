//미션 제출 현황 card 리스트
import { authInstance } from '@/api/authInstance'

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
  content: Assignment[]
}

interface SubmitStatusResponse {
  timestamp: string
  code: number
  message: string
  result: SubmitStatusResult
}

//status page Upper Box 부분
export const getMissionStatusList = async (
  educationId: string | string[] | undefined,
  page: number,
) => {
  const response = await authInstance.get(
    `/api/v1/education/${educationId}/assignments`,
    {
      params: { page },
    },
  )

  const data: SubmitStatusResponse = response?.data
  return data?.result
}
