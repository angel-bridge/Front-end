export interface InputPropTypes {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isError: boolean
  setIsError: (isError: boolean) => void
  apiValue: string | undefined
}
