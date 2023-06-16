import Image from "next/image"
import mern from '@/app/assets/mern.jpg'

export default function Projects() {
  return (
    <>
    <hr className="solid mt-24 text-red"/>
      <div className="projects mt-8 flex flex-row justify-between">
        <div className="flex flex-col">
          <h4 className="text-2xl text-green">What I know so far?</h4>
          <h2 className="text-4xl mb-4 text-light-blue">Let me show you what I can do</h2>
          <p className="text-lg">Focus on the M.E.R.N Stack ( Mongo, Express, React, Node ). CRUD - Create Read Update Delete.</p>
          <p className="mb-4 text-lg">Basic operations performed on data in a database or computer system</p>
        </div>
        <div className="flex ">
          <Image className="w-64 h-36 " alt='mern' src={mern} />
        </div>
      </div>
    </>
  )
}