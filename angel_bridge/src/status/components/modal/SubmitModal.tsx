'use client'
import React, { useEffect, useState } from 'react'
import {
  button_style,
  close_modal,
  gray_button_style,
} from '../../styles/button.css'
import * as style from '../../styles/common.css'
import modalcancel from '../../assets/modalCancel.svg'
import Image from 'next/image'
import { useModalStore } from '@/status/store/useModal'

import * as input_style from '../../styles/input.css'
import ErrorMessage from '@/mypage/memberInfo/components/ErrorMessage'
import { content_container } from '@/status/styles/modal.css'

export default function SubmitModal() {
  const [notionLink, setNotionLink] = useState('')
  const [isError, setIsError] = useState(false)

  const { setIsSubmitModalClose } = useModalStore()
  const urlRegex = /^(https?|ftp):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i

  useEffect(() => {
    if (notionLink && urlRegex.test(notionLink) === false) {
      setIsError(true)
    } else {
      setIsError(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notionLink, isError])

  function handleClickToSubmit() {
    setIsSubmitModalClose()
  }

  return (
    <div className={style.modal_background_two}>
      <div className={style.modal_container}>
        <div className={content_container}>
          <div className={style.text_container_style}>
            <div className={style.modal_title_closebtn}>
              <p className={style.title_style}>2일차</p>
              <div onClick={handleClickToSubmit} className={close_modal}>
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

          <div className={input_style.input_button_container}>
            <div className={input_style.inputwithtag_container}>
              <p className={input_style.input_label}>노션 링크 *</p>
              <input
                onChange={(e) => setNotionLink(e.target.value)}
                value={notionLink}
                className={input_style.input_style}
                placeholder="수행한 과제의 노션 링크를 제출해 주세요"
              />
              {isError && <ErrorMessage number={3} />}
            </div>
            <button
              onClick={handleClickToSubmit}
              className={!isError ? button_style : gray_button_style}
            >
              미션 제출하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
