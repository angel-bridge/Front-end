import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface DetailType {
  title: string
  description: string
  educationStartDate: string
  educationEndDate: string
  recruitmentStartDate: string
  recruitmentEndDate: string
  price: number
  preFile: string | StaticImport
  detailFile: string
}
