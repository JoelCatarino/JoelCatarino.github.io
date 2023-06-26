'use client'
import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  Phone,
} from '@phosphor-icons/react'

export default function Footer() {
  return (
    <>
      <div className="mt-32 flex max-w-6xl flex-col items-center justify-center md:container md:mx-auto">
        <h2 className="mb-4 text-4xl text-light-blue">How to find me</h2>
        <p className="mb-4 text-lg">
          Feel free to contact me for any matter you are interested in.
        </p>
        <p className="mb-4 text-lg">
          If you wanna see my{' '}
          <a
            href="https://drive.google.com/file/d/18-OTcVB9JqbRTI7V561XoZS2BOPjXANC/view?usp=sharing"
            target="_blank"
            className="text-green"
          >
            resume...
          </a>
        </p>
        <div className="flex flex-col items-center">
          <ul className="mt-6">
            <li className="flex">
              <Envelope size={32} className="mr-2 text-3xl text-red" />
              joelscatarino@outlook.com
            </li>

            <li className="flex">
              <Phone size={32} className="mr-2 text-3xl text-red" /> +55 (71)
              99738-5375
            </li>
          </ul>
          <div className="mt-6 flex flex-row ">
            <a href="http://www.github.com/JoelCatarino">
              <GithubLogo
                target="_blank"
                size={32}
                className="mr-8 text-white hover:text-light-blue"
              />
            </a>
            <a href="http://www.linkedin.com/in/joel-catarino-977a8a19b/">
              <LinkedinLogo
                target="_blank"
                size={32}
                className="text-blue hover:text-light-blue"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
