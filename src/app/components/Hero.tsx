'use client'
import Image from 'next/image'
import profilePic from '../assets/eu.png'

export default function Header() {
  return (
    <>
      <div className="mt-32 flex  flex-row justify-between md:container md:mx-auto">
        <div className="content my-10 mt-20">
          <h1 className="mb-4 text-6xl text-light-blue">Welcome</h1>
          <p className="mb-4 text-lg">
            Welcome to my personal webpage, if you are looking for a front end
            developer, you just found one
          </p>
          <p className="mb-4 text-lg">
            My name is Joel Catarino I am from Brazil and I am ready to give you
            solutions through my abilities to solve problems
          </p>
          <p className="mb-4 text-lg">
            I am currently looking for an opportunity for me to develop and have
            the first contact with the programming market
          </p>
        </div>
        <div className="my-8 ml-8">
          <div>
            <Image
              className="hidden h-48 w-full rounded-xl md:block md:h-full md:w-48"
              alt="profile"
              src={profilePic}
            />
          </div>
        </div>
      </div>
    </>
  )
}
