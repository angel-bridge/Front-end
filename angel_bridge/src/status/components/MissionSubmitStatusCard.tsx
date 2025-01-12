'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import * as style from '../styles/missionStatus.css'
import { MISSION_STATUS } from '../core/missionStatus'
import Modal from './modal/Modal'
import { useModalStore } from '../store/useModal'

type Variants = 'green' | 'orange' | 'red' | 'purple' | 'gray'

export default function MissionSubmitStatusCard({
  attendanceStatus,
  round,
}: {
  attendanceStatus: string
  round: number
}) {
  const { isModalOpen, setIsModalOpen } = useModalStore()
  const [submitModal, setSubmitModal] = useState(false)
  const status = MISSION_STATUS.find((data) => {
    return data.submitStatus === attendanceStatus
  })

  const img = status?.badge
  const text = status?.text
  const variants = status?.badgecolor as Variants
  const modalType = status?.modalType

  function handleModal() {
    setSubmitModal(true)
    setIsModalOpen()
  }
  return (
    <>
      {modalType != 'noModal' && modalType && submitModal && isModalOpen && (
        <Modal modalType={modalType} />
      )}

      <div
        style={{ pointerEvents: modalType === 'noModal' ? 'none' : 'auto' }}
        onClick={handleModal}
        className={`${style.card_container} variants && ${style.text_style[variants]}`}
      >
        <div className={style.status_img}>
          <Image fill src={img} alt="미션 현황" />
        </div>
        <p>{round}회차</p>
        <p>{text}</p>
      </div>
    </>
  )
}
