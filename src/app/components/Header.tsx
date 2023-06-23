'use client'
import { GithubLogo, LinkedinLogo, List, Phone } from '@phosphor-icons/react'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const ToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <div className="md:flex md:items-center md:justify-between">
        <div className="mr-5 flex flex-row justify-between">
          <div className="flex cursor-pointer">
            <h1 className="flex font-saira text-2xl text-red">Joel Catarino</h1>
          </div>
          <span
            onClick={ToggleMenu}
            className="relative mx-2 flex cursor-pointer text-3xl md:hidden"
          >
            <List className="absolute right-0" size={32} />
            {menuOpen && (
              <ul className="mt-14 flex flex-col items-center gap-10 text-xl">
                <li className="">
                  <a href="#" className="duration-500 hover:text-light-blue">
                    Home
                  </a>
                </li>
                <li className="">
                  <a href="#" className="duration-500 hover:text-light-blue">
                    About
                  </a>
                </li>
                <li className="">
                  <a href="#" className="duration-500 hover:text-light-blue">
                    Projects
                  </a>
                </li>
                <li className="">
                  <a href="#" className="duration-500 hover:text-light-blue">
                    Contact
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="flex items-center text-light-blue duration-500 hover:text-light-blue"
                  >
                    <Phone size={16} className="mr-2 text-center" /> +55 (71)
                    99738-5375
                  </a>
                </li>
              </ul>
            )}
          </span>
        </div>
        <div className="ml-30">
          <ul className="absolute left-0 top-[-400px] z-[-1] w-full gap-2 py-4 pl-7 font-dida text-lg opacity-0 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:py-0 md:pl-0 md:opacity-100">
            <li className="mx-4 my-6 md:my-0">
              <a href="#" className="duration-500 hover:text-light-blue">
                Home
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a href="#" className="duration-500 hover:text-light-blue">
                About
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a href="#" className="duration-500 hover:text-light-blue">
                Projects
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a href="#" className="duration-500 hover:text-light-blue">
                Contact
              </a>
            </li>
            <li className="mx-4 my-6 flex text-center md:my-0">
              <a
                href="#"
                className="flex items-center text-green duration-500 hover:text-dark-green"
              >
                <Phone size={16} className="mr-2 text-center" /> +55 (71)
                99738-5375
              </a>
            </li>
            <div className="flex gap-4 ">
              <a href="http://www.github.com/JoelCatarino">
                <GithubLogo size={26} className="hover:text-light-blue" />
              </a>
              <a href="http://www.linkedin.com/in/joel-catarino-977a8a19b/">
                <LinkedinLogo size={26} className="hover:text-light-blue" />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}
