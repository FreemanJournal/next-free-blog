import React from 'react'
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-gray-50 h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex gap-4 lg:items-center lg:justify-between">
        <div className="">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-6xl">404</span>
          </h2>
         
        </div>
        <hr className='border bottom-2 bg-gray-300 h-28 w-1/12'/>
        <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
        <p className="block text-gray-600 text-2xl mb-5">Please check the url and try again</p>
          <div className="inline-flex rounded-md shadow">
          
            <Link href="/">
              <button

                className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Go Back Home
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
