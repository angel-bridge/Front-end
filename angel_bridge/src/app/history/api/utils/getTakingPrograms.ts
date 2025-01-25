import { instance } from '@/api/instance'
import { ContentType } from '@/program/types/dataType'

interface TakingProgramType {
    timestamp: string
    code: number
    message: string
    result?: ContentType
}

export const getTakingPrograms = async ({ page = 1 }) => {
    const response: TakingProgramType = await instance.get(`/api/v1/enrollment/inprogress`, {
        params: { page },
    })
    return response.result    
}
