import Image from 'next/image'
import devfinance from '../assets/devFinance.png'
import waiter from '../assets/waiter.png'

export default function Cards() {
  return (
    <>
      <div className="gallery flex md:flex-row sm:flex-col sm:items-center sm:m-6 justify-around">
        <div className="max-w-sm overflow-hidden rounded shadow-2xl shadow-blue ">
          <div className="bg-transpa">
            <a href="https://github.com/JoelCatarino/dev.finance.react.ts">
              <Image className="w-full" src={devfinance} alt="dev" />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">Dev.finance$</div>
                <p className="text-gray-700 text-base">
                  this is a wallet dev that manages all calculated expenses and
                  earnings.
                </p>
              </div>
              <div className="px-6 pb-2 pt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-light-blue px-3 py-1 text-sm font-semibold text-black">
                  react
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-blue px-3 py-1 text-sm font-semibold text-black">
                  typescript
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-red px-3 py-1 text-sm font-semibold text-black">
                  styled-components
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="max-w-sm sm:mt-10 md:mt-auto overflow-hidden rounded shadow-2xl shadow-red ">
          <div className="bg-transpa">
            <a href="https://github.com/JoelCatarino/waiter-app">
              <Image className="w-full" src={waiter} alt="dev" />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">Waiter App</div>
                <p className="text-gray-700 text-base">
                  This app is a system that facilitates the waiter's job. It
                  has the DESKTOP that connect to MOBILE and DATABASE
                </p>
              </div>
              <div className="px-6 pb-2 pt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-light-blue px-3 py-1 text-sm font-semibold text-black">
                  react
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-blue px-3 py-1 text-sm font-semibold text-black">
                  typescript
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-red px-3 py-1 text-sm font-semibold text-black">
                  Express
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-light-blue px-3 py-1 text-sm font-semibold text-black">
                  Tailwind
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-dark-green px-3 py-1 text-sm font-semibold text-black">
                  MongoDB
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-green px-3 py-1 text-sm font-semibold text-black">
                  Node
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
