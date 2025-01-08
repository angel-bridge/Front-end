import { instance } from '@/api/instance'
import { DataType } from '@/program/types/dataType'

export interface ResultType {
  educationId: number
  preImage: string
  description: string
  title: string
  recruitmentStatus: string
}

interface AllProgramType {
  timestamp: string
  code: number
  message: string
  result: DataType[]
}

export const getOngoingProgram = async () => {
  const response: AllProgramType = await instance.get(
    `/api/v1/education/ongoing`,
  )
  return response.result
}
