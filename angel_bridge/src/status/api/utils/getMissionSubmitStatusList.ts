import { authInstance } from '@/api/authInstance'

interface MissionSubmitStatusListResult {
  assignmentId: number
  round: number
  startTime: string
  endTime: string
  assignmentStatus: string
  attendanceStatus: string
}

interface MissionSubmitStatusList {
  timestamp: string
  code: number
  message: string
  result?: MissionSubmitStatusListResult
}

export const getMissionSubmitStatusList = async ({
  page = 1,
  educationId,
}: {
  page: number
  educationId: number
}) => {
  const response: MissionSubmitStatusList = await authInstance.get(
    `/api/v1/education/${educationId}/assignments`,
    {
      params: { page },
    },
  )
  return response.result
}
