import { authInstance } from '@/api/authInstance'
import { ProgramContentType } from '@/program/types/dataType'

interface WillTakeProgramType {
    timestamp: string
    code: number
    message: string
    result?: ProgramContentType
}

interface ResponseType {
    data: WillTakeProgramType
}

export const getWillTakePrograms = async ({ page = 1 }) => {
    const response: ResponseType = await authInstance.get(`/api/v1/enrollment/scheduled`, {
        params: { page },
    })
    const res: WillTakeProgramType = response.data
    console.log("api 결과값", response)
    return res.result    
}
