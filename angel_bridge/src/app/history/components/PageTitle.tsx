import React from 'react'
import { title, button_container } from '../styles/PageTitle.css'
import TakingButton from './TakingButton'
import WillTakeButton from './WillTakeButton'
import TakenButton from './TakenButton'

export default function PageTitle() {
    return (
        <div>
            <h1 className={title}>현종혁 님의 수강내역</h1>
            <div className={button_container}>
                <TakingButton />
                <WillTakeButton />
                <TakenButton />
            </div>
        </div>
    )
}
