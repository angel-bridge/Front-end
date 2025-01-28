export interface DataType {
  educationId: number
  preImage: string
  description: string
  title: string
  recruitmentStatus: string
}

export interface ContentType {
  total: number
  pageNum: number
  totalPages: number
  content: DataType[]
}

export interface ProgramDataType {
  educationId: number
  preImage: string
  description: string
  title: string
  educationStartDate: string
  educationEndDate: string
  enrollmentStatus: string
}

export interface ProgramContentType {
  total: number
  pageNum: number
  totalPages: number
  content: ProgramDataType[]
}
