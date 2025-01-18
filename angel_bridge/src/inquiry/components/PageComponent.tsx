import React from 'react'
import { INQUIRY_LIST } from '../core/inquiry'
import Container from './Container'
import { pagecompo_style } from '../styles/container.css'

export default function PageComponent() {
  return (
    <div className={pagecompo_style}>
      {INQUIRY_LIST.map((data) => {
        const { title, discription, image, link } = data
        return (
          <Container
            link={link}
            key={title}
            title={title}
            discription={discription}
            image={image}
          />
        )
      })}
    </div>
  )
}
