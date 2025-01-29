import React from 'react'
import { button_style, close_modal } from '../../styles/button.css'
import * as style from '../../styles/common.css'
import modalcancel from '../../assets/modalCancel.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function ConfirmMissonModal({
  closeSubmitConfirmModal,
  title,
  description,
  submissionLink,
  round,
}: {
  closeSubmitConfirmModal: () => void
  title: string | undefined
  description: string | undefined
  submissionLink: string | undefined
  round: number | undefined
}) {
  return (
    <div className={style.modal_background}>
      <div className={style.modal_container}>
        <div className={style.content_container}>
          <div className={style.text_container_style}>
            <div className={style.modal_title_closebtn}>
              <p className={style.title_style}>{round}일차</p>
              <div onClick={closeSubmitConfirmModal} className={close_modal}>
                <Image src={modalcancel} fill alt="모달 닫기" />
              </div>
            </div>

            <div className={style.subText_container_style}>
              <p className={style.second_title_style}>{title}</p>
              <p className={style.description_style}>{description}</p>
            </div>
          </div>

          {submissionLink && (
            <Link href={submissionLink}>
              <button className={button_style}>제출한 미션 확인하기</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
