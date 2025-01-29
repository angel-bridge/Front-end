import { create } from 'zustand'

interface ModalStore {
  title: string | undefined
  description: string | undefined
  assignmentId: number
  setTitle: (data: string | undefined) => void
  setDescription: (data: string | undefined) => void
  setAssignmentId: (data: number | undefined) => void
}

export const useSubmit = create<ModalStore>((set) => ({
  title: '',
  description: '',
  assignmentId: 0,
  setTitle: (data) => set(() => ({ title: data })),
  setDescription: (data) => set(() => ({ description: data })),
  setAssignmentId: (data) => set(() => ({ assignmentId: data })),
}))
