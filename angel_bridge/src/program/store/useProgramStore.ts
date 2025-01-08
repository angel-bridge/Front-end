'use client'
import { create } from 'zustand'
import { DataType } from '../types/dataType'

interface ProgramStorType {
  program: DataType[]
  setProgram: (data: DataType[]) => void

  isClickUpcomings: boolean
  isClickOngoings: boolean

  setIsClickUpcoming: () => void
  setIsClickOngoings: () => void
}

export const useProgramStore = create<ProgramStorType>((set) => ({
  program: [],
  setProgram: (data: DataType[]) => set({ program: data }),

  //Control Btn
  isClickUpcomings: false,
  isClickOngoings: false,
  setIsClickUpcoming: () =>
    set((state) => ({
      isClickUpcomings: !state.isClickUpcomings,
      isClickOngoings: false,
    })),
  setIsClickOngoings: () =>
    set((state) => ({
      isClickOngoings: !state.isClickOngoings,
      isClickUpcomings: false,
    })),
}))
