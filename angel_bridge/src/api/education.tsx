import { instance } from './instance'

export interface ProgramResult {
  educationId: number
  preImage: string
  title: string
  description: string
  recruitmentStatus: string
}

interface FetchProgramResponse {
  timestamp: string
  code: number
  message: string
  result: ProgramResult[]
}

export const getRecommendedProgram = async () => {
  const response: FetchProgramResponse = await instance.get(
    `/api/v1/education/recommendations`,
  )
  //console.log('추천 교육프로그램 가져옴!!', response);
  return response.result
}
