import { instance } from '@/api/instance'

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
  result: ResultType[]
}

export const getAllPrograms = async () => {
  const response: AllProgramType = await instance.get(`/api/v1/education`)
  return response.result
}
