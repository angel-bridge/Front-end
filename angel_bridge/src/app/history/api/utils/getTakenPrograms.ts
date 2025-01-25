import { authInstance } from '@/api/authInstance'
import { ProgramContentType } from '@/program/types/dataType'

interface TakenProgramType {
    timestamp: string
    code: number
    message: string
    result?: ProgramContentType
}

interface ResponseType {
    data: TakenProgramType
}

export const getTakenPrograms = async ({ page = 1 }) => {
    const response: ResponseType = await authInstance.get(`/api/v1/enrollment/completed`, {
        params: { page },
    })
    const res: TakenProgramType = response.data
    console.log("api 결과값", response)
    return res.result 
}
