import { instance } from '@/api/instance'
import { ProgramContentType } from '@/program/types/dataType'

interface TakingProgramType {
    timestamp: string
    code: number
    message: string
    result?: ProgramContentType
}

export const getTakingPrograms = async ({ page = 1 }) => {
    const response: TakingProgramType = await instance.get(`/api/v1/enrollment/inprogress`, {
        params: { page },
    })
    return response.result    
}
