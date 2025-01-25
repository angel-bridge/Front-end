import { authInstance } from '@/api/authInstance'
import { ProgramContentType } from '@/program/types/dataType'

interface TakingProgramType {
    timestamp: string
    code: number
    message: string
    result?: ProgramContentType
}

interface ResponseType {
    data: TakingProgramType
}

export const getTakingPrograms = async ({ page = 1 }) => {
    const response: ResponseType = await authInstance.get(`/api/v1/enrollment/inprogress`, {
        params: { page },
    })
    const res: TakingProgramType = response.data
    console.log("api 결과값", response)
    return res.result    
}
