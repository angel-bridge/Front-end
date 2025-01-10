import { create } from 'zustand'

interface ModalStore {
  isModalOpen: boolean
  setIsMdoalClose: () => void
  setIsModalOpen: () => void
}

export const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  setIsMdoalClose: () => set((state) => ({ isModalOpen: false })),
  setIsModalOpen: () => set((state) => ({ isModalOpen: true })),
}))
