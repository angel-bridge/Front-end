import React from 'react'
import {
  container_style,
  discription_contaier_style,
  discription_style,
  image_container_style,
  title_style,
} from '../styles/container.css'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface ContainerProps {
  title: string
  discription: string
  image: StaticImageData
  link: string
}

export default function Container({
  title,
  discription,
  image,
  link,
}: ContainerProps) {
  return (
    <div className={container_style}>
      <div className={image_container_style}>
        <Image src={image} fill alt={title} />
      </div>
      <h1 className={title_style}>{title}</h1>
      <Link style={{ textDecoration: 'none' }} href={link}>
        <button className={discription_contaier_style}>
          <p className={discription_style}>{discription}</p>
        </button>
      </Link>
    </div>
  )
}
