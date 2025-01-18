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
