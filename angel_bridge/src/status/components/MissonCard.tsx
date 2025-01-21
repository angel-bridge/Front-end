'use client'
import React, { useState } from 'react'
import { button_style } from '../styles/button.css'
import * as style from '../styles/common.css'
import Modal from './modal/Modal'
import { useModalStore } from '../store/useModal'

export default function MissonCard() {
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
          <p className={style.second_title_style}>창업아이템 배경 및 필요성</p>
          <p className={style.description_style}>
            창업 아이템의 배경과 필요성을 명확히 하며 시작해봅시다! 시장과
            소비자 문제를 정확히 정의함으로써 사업 모델(BM)을 구체화할 기초를
            다지고, 창업 아이템이 제공할 수 있는 핵심 가치를 구상해보세요.
          </p>
        </div>
      </div>
      <button onClick={handleDetailMissionModal} className={button_style}>
        미션 자세히 보기
      </button>
      {isModalOpen && detailModal && <Modal modalType={'clickDetail'} />}
    </div>
  )
}
