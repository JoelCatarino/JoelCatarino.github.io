'use client'
import Image from 'next/image'
import profilePic from '../assets/eu.png'
import { GithubLogo, LinkedinLogo, List, Phone } from '@phosphor-icons/react'
import { useState } from 'react'

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  const ToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <div className="p-4 mx-4 font-dida md:flex md:items-center md:justify-between">
        <div className="flex justify-between flex-row">
          <div className="cursor-pointer flex">
            <h1 className='text-2xl flex'>Joel Catarino</h1>
          </div>
          <span onClick={ToggleMenu} className="relative flex text-3xl cursor-pointer mx-2 md:hidden">
            <List className='right-0 absolute' size={32} />
            {menuOpen && (
              <ul className="mt-14 flex items-center flex-col text-xl gap-10">
                <li className="">
                  <a href="#" className="hover:text-light-pink duration-500">Home</a>
                </li>
                <li className="">
                  <a href="#" className="hover:text-light-pink duration-500">About</a>
                </li>
                <li className="">
                  <a href="#" className="hover:text-light-pink duration-500">Projects</a>
                </li>
                <li className="">
                  <a href="#" className="hover:text-light-pink duration-500">Contact</a>
                </li>
                <li className="">
                  <a href="#" className="hover:text-light-pink text-light-pink duration-500 flex items-center"><Phone size={16} className='mr-2 text-center' /> +55 (71) 99738-5375</a>
                </li>
              </ul>
            )}
          </span>
        </div>
        <div>
          <ul className="md:flex gap-2 md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
            <li className="font-dida mx-4 my-6 md:my-0">
              <a href="#" className="font-dida hover:text-light-pink duration-500">Home</a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a href="#" className="hover:text-light-pink duration-500">About</a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a href="#" className="hover:text-light-pink duration-500">Projects</a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a href="#" className="hover:text-light-pink duration-500">Contact</a>
            </li>
            <li className="flex text-center mx-4 my-6 md:my-0">
              <a href="#" className="hover:text-light-pink text-light-pink duration-500 flex items-center"><Phone size={16} className='mr-2 text-center' /> +55 (71) 99738-5375</a>
            </li>
            <div className="flex gap-4">
              <a href="github.com/JoelCatarino">
                <GithubLogo size={26} />
              </a>
              <a href="linkedin.com/in/joel-catarino-977a8a19b/">
                <LinkedinLogo size={26} />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}