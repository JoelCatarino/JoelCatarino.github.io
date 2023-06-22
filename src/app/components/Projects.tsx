import Image from 'next/image'
import mern from '@/app/assets/mern.jpg'
import Cards from './Cards'

export default function Projects() {
  return (
    <>
      <hr className="md:container md:mx-auto solid mt-24 text-red" />
      <div className="md:container md:mx-auto projects mt-8 flex flex-row justify-between">
        <div className="flex flex-col">
          <h4 className="text-2xl text-green">What I know so far?</h4>
          <h2 className="mb-4 text-4xl text-light-blue">
            Let me show you what I can do
          </h2>
          <p className="text-lg">
            Focus on the M.E.R.N Stack ( Mongo, Express, React, Node ). CRUD -
            Create Read Update Delete.
          </p>
          <p className="mb-4 text-lg">
            Basic operations performed on data in a database or computer system
          </p>
        </div>
        <div className="flex sm:flex-col">
          <Image className="h-auto w-auto hidden md:block" alt="mern" src={mern} />
        </div>
      </div>
      <Cards />
    </>
  )
}
