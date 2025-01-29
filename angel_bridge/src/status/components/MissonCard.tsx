'use client'
import React, { useState } from 'react'
import { button_style } from '../styles/button.css'
import * as style from '../styles/common.css'
import Modal from './modal/Modal'
import { useModalStore } from '../store/useModal'

export default function MissonCard({
  assignmentTitle,
  description,
  assignmentId,
}: {
  assignmentTitle: string | undefined
  description: string | undefined
  assignmentId: number | undefined
}) {
  const { isModalOpen, setIsModalOpen } = useModalStore()
  const [detailModal, setDetailModal] = useState(false)

  function handleDetailMissionModal() {
    setDetailModal(true)
    setIsModalOpen()
  }

  return (
    <div className={style.content_container}>
      <div className={style.text_container_style}>
        <p className={style.title_style}>오늘의 미션</p>
        <div className={style.subText_container_style}>
          <p className={style.second_title_style}>{assignmentTitle}</p>
          <p className={style.description_style}>{description}</p>
        </div>
      </div>
      <button onClick={handleDetailMissionModal} className={button_style}>
        미션 자세히 보기
      </button>
      {isModalOpen && detailModal && (
        <Modal
          assignmentId={assignmentId}
          assignmentTitle={assignmentTitle}
          description={description}
          modalType={'clickDetail'}
        />
      )}
    </div>
  )
}
