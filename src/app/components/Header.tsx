'use client'
import Image from 'next/image'
import profilePic from '../assets/eu.png'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

export default function Header() {
  return (
    <>
      <div className="layout w-full flex flex-row justify-between py-8 px-16 ">
        <div className="logo items-center flex-row flex">
          <Image className='mr-2 rounded-full'
            src={profilePic}
            alt="Picture of the author"
            height={50}
            width={50}
          />
          <div className="logo-content ">
            <p className='text-2xl font-bold'>Joel Catarino</p>
          </div>
        </div>
        <div className="menu flex items-center ">
          <div className="social flex flex-row">
            <LinkedinLogo size={32} className='mr-8' />
            <GithubLogo size={32} />
          </div>
        </div>
      </div>
    </>
  )
}