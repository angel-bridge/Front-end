import React from 'react'
import { button_style, close_modal } from '../../styles/button.css'
import * as style from '../../styles/common.css'
import modalcancel from '../../assets/modalCancel.svg'
import Image from 'next/image'
import { useModalStore } from '@/status/store/useModal'

export default function SubmitMissionModal({
  closeSubmitMissionModal,
}: {
  closeSubmitMissionModal: () => void
}) {
  const { setIsSubmitModalOpen } = useModalStore()

  function handleClickToSubmit() {
    closeSubmitMissionModal()
    setIsSubmitModalOpen()
  }

  return (
    <div className={style.modal_background}>
      <div className={style.modal_container}>
        <div className={style.content_container}>
          <div className={style.text_container_style}>
            <div className={style.modal_title_closebtn}>
              <p className={style.title_style}>2일차</p>
              <div onClick={closeSubmitMissionModal} className={close_modal}>
                <Image src={modalcancel} fill alt="모달 닫기" />
              </div>
            </div>

            <div className={style.subText_container_style}>
              <p className={style.second_title_style}>
                창업아이템 배경 및 필요성
              </p>
              <p className={style.description_style}>
                창업 아이템의 배경과 필요성을 명확히 하며 시작해봅시다! 시장과
                소비자 문제를 정확히 정의함으로써 사업 모델(BM)을 구체화할
                기초를 다지고, 창업 아이템이 제공할 수 있는 핵심 가치를
                구상해보세요.
              </p>
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
