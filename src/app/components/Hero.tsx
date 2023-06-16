'use client'
import Image from 'next/image'
import profilePic from '../assets/eu.png'

export default function Header() {


  return (
    <>
      <div className="hero flex mt-32 flex-row">
        <div className="content mt-20 my-10 mr-4">
          <h1 className='text-6xl mb-4 text-light-blue'>Welcome</h1>
          <p className='mb-4 text-lg'>Welcome to my personal webpage, if you are looking for a front end developer, you just found one</p>
          <p className='mb-4 text-lg'>My name is Joel Catarino I am from Brazil and I am ready to give you solutions through my abilities to solve problems</p>
          <p className='mb-4 text-lg'>I am currently looking for an opportunity for me to develop and have the first contact with the programming market</p>
        </div>
        <div className="my-8 ml-8">
          <div>
            <Image className='rounded-xl h-48 w-full md:h-full md:w-48 hidden md:block' alt='profile' src={profilePic} />
          </div>
        </div>
      </div>
    </>
  )
}
