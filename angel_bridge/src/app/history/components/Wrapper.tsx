import React from 'react'
import PageTitle from './PageTitle'
import Contents from './Contents'
import { wrapper } from '../styles/Wrapper.css'

export default function Wrapper() {
    return (
        <div className={wrapper}>
            <PageTitle />
            <Contents />
        </div>
    )
}
