import { authInstance } from '@/api/authInstance'

export interface MissionBoxResult {
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

interface MissionBOxResponse {
  timestamp: string
  code: number
  message: string
  result: MissionBoxResult
}

//status page Upper Box 부분
export const getMissionBox = async (
  educationId: string | string[] | undefined,
) => {
  const response = await authInstance.get(
    `/api/v1/education/${educationId}/assignment`,
  )
  const data: MissionBOxResponse = response?.data

  return data?.result
}
