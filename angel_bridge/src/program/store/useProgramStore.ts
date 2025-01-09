'use client'
import { create } from 'zustand'
import { DataType } from '../types/dataType'

interface ProgramStorType {
  program: DataType[]
  setProgram: (data: DataType[] | undefined) => void

  isClickUpcomings: boolean
  isClickOngoings: boolean

  setIsClickUpcoming: () => void
  setIsClickOngoings: () => void

  search: string
  setSearch: (data: string) => void

  listKind: string
  setListKind: (data: string) => void
}

export const useProgramStore = create<ProgramStorType>((set) => ({
  program: [],
  setProgram: (data: DataType[] | undefined) => set({ program: data }),

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

  //검색
  search: '',
  setSearch: (data: string) => set({ search: data }),
  listKind: '',
  setListKind: (data: string) => set({ listKind: data }),
}))
