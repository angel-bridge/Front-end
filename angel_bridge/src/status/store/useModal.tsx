import { create } from 'zustand'

interface ModalStore {
  isModalOpen: boolean
  setIsMdoalClose: () => void
  setIsModalOpen: () => void

  isSubmitModal: boolean
  setIsSubmitModalOpen: () => void
  setIsSubmitModalClose: () => void
}

export const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  setIsMdoalClose: () => set(() => ({ isModalOpen: false })),
  setIsModalOpen: () => set(() => ({ isModalOpen: true })),

  isSubmitModal: false,
  setIsSubmitModalOpen: () => set(() => ({ isSubmitModal: true })),
  setIsSubmitModalClose: () => set(() => ({ isSubmitModal: false })),
}))
