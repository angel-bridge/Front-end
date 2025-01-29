import React from 'react'
import { button_style, close_modal } from '../../styles/button.css'
import * as style from '../../styles/common.css'
import modalcancel from '../../assets/modalCancel.svg'
import Image from 'next/image'
import { useModalStore } from '@/status/store/useModal'
import { useSubmit } from '@/status/store/useSubmit'

//미션 제출 전 나오는 모달입니다.
export default function SubmitMissionModal({
  closeSubmitMissionModal,
  title,
  description,
  assignmentId,
}: {
  title: string | undefined
  description: string | undefined
  closeSubmitMissionModal: () => void
  assignmentId: number
}) {
  const { setIsSubmitModalOpen } = useModalStore()
  const { setTitle, setDescription, setAssignmentId } = useSubmit()

  function handleClickToSubmit() {
    closeSubmitMissionModal()
    setIsSubmitModalOpen()
    setTitle(title)
    setDescription(description)
    setAssignmentId(assignmentId)
  }

  return (
    <div className={style.modal_background}>
      <div className={style.modal_container}>
        <div className={style.content_container}>
          <div className={style.text_container_style}>
            <div className={style.modal_title_closebtn}>
              <p className={style.title_style}>{assignmentId}일차</p>
              <div onClick={closeSubmitMissionModal} className={close_modal}>
                <Image src={modalcancel} fill alt="모달 닫기" />
              </div>
            </div>

            <div className={style.subText_container_style}>
              <p className={style.second_title_style}>{title} </p>
              <p className={style.description_style}>{description}</p>
            </div>
          </div>

          <button onClick={handleClickToSubmit} className={button_style}>
            미션 제출하기
          </button>
        </div>
      </div>
    </div>
  )
}
