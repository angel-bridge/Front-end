import React from 'react'
import { button_style, close_modal } from '../../styles/button.css'
import * as style from '../../styles/common.css'
import modalcancel from '../../assets/modalCancel.svg'
import Image from 'next/image'
import { MODAL_TYPE } from '@/status/core/modalType'
import { useModalStore } from '@/status/store/useModal'
import { useSubmit } from '@/status/store/useSubmit'

//위에 미션박스 누르면 나타나는 모달
export default function Modal({
  assignmentId,
  modalType,
  assignmentTitle,
  description,
}: {
  assignmentId: number | undefined
  assignmentTitle: string | undefined
  description: string | undefined
  modalType: string
}) {
  const { setTitle, setDescription, setAssignmentId } = useSubmit()
  const { setIsMdoalClose, setIsSubmitModalOpen } = useModalStore()
  const modal = MODAL_TYPE.find((modal) => {
    return modalType === modal.type
  })

  const buttonText = modal?.buttonText

  function handleCloseModal() {
    setIsMdoalClose()
  }

  function handleOpenSubmitModal() {
    setIsSubmitModalOpen()
    setTitle(assignmentTitle)
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
              <div onClick={handleCloseModal} className={close_modal}>
                <Image src={modalcancel} fill alt="모달 닫기" />
              </div>
            </div>
            <div className={style.subText_container_style}>
              <p className={style.second_title_style}>{assignmentTitle}</p>
              <p className={style.description_style}>{description}</p>
            </div>
          </div>
          <button
            onClick={
              modalType == 'clickGreenOrOrange'
                ? undefined
                : handleOpenSubmitModal
            }
            className={button_style}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}
