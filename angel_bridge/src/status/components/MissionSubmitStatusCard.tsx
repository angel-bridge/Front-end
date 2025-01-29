'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import * as style from '../styles/missionStatus.css'
import { MISSION_STATUS } from '../core/missionStatus'
import ConfirmMissonModal from './modal/ConfirmMissonModal'
import SubmitMissionModal from './modal/SubmitMissionModal'
import { useModalStore } from '../store/useModal'
import SubmitModal from './modal/SubmitModal'
import { modal_background } from '../styles/common.css'
import useGetSubmitStatus from '../api/hooks/useGetSubmitStatus'
import { useParams } from 'next/navigation'

type Variants = 'green' | 'orange' | 'red' | 'purple' | 'gray'

export default function MissionSubmitStatusCard({
  attendanceStatus,
  round,
  assignmentId,
}: {
  attendanceStatus: string
  round: number
  assignmentId: number
}) {
  const params = useParams()
  const educationId = params.educationId as string

  const { data } = useGetSubmitStatus(
    educationId,
    assignmentId,
    attendanceStatus,
  )

  const [confirmSubmitModal, setConfirmSubmitModal] = useState(false)
  const [toSubmitModal, setToSubmitModal] = useState(false)
  const { isSubmitModal } = useModalStore()

  //각 상태에 따른 모달 확인
  const status = MISSION_STATUS.find((data) => {
    return data.submitStatus === attendanceStatus
  })

  const img = status?.badge
  const text = status?.text
  const variants = status?.badgecolor as Variants
  const modalType = status?.modalType

  function handleModal(modalType: string | undefined) {
    if (modalType === 'submitcomplete') {
      setConfirmSubmitModal(true)
    } else if (modalType === 'submityet') {
      setToSubmitModal(true)
    }
  }

  //제출확인하기 모달 닫기
  function closeSubmitConfirmModal() {
    setConfirmSubmitModal(false)
  }

  //제출하러가기 모달 닫기
  function closeSubmitMissionModal() {
    setToSubmitModal(false)
  }

  return (
    <>
      {/* //제출한 미션 */}
      {modalType == 'submitcomplete' && confirmSubmitModal && (
        <div className={modal_background}>
          <ConfirmMissonModal
            round={data?.round}
            title={data?.title}
            description={data?.description}
            submissionLink={data?.submissionLink}
            closeSubmitConfirmModal={closeSubmitConfirmModal}
          />
        </div>
      )}
      {modalType == 'submityet' && toSubmitModal && (
        <SubmitMissionModal
          title={data?.title}
          description={data?.description}
          closeSubmitMissionModal={closeSubmitMissionModal}
        />
      )}
      {isSubmitModal && <SubmitModal />}
      <div
        style={{ pointerEvents: modalType === 'noModal' ? 'none' : 'auto' }}
        onClick={() => handleModal(modalType)}
        className={`${style.card_container} variants && ${style.text_style[variants]}  ${
          modalType === 'noModal' ? style.noHover : style.cardContainerHover
        }`}
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
