import { BadgeCheckIcon } from '@heroicons/react/outline'
import React from 'react'




export default function Blogs() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl capitalize">
            Understanding some core concept of react
          </p>

        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {/* Questions and answer - 1 */}
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <BadgeCheckIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">What is the Context Api ?</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">

                <p className='font-semibold'>
                Context API is a spacial React API.It can share values between components without having to explicitly pass a prop through every level of the parent-child tree of React Components.It is designed to share data globally such as the current user data, authentication data, theming data,user language data etc.Prop-drilling or passing data through props over and over can cause problems for our application.It is also frustrating experience. Context APi increased the reusability and maintainability of our application.
                </p>
              </dd>
            </div>
            {/* Questions and answer - 2 */}

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <BadgeCheckIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 capitalize">Differences between inline,block and inline-block element</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">

                <dt>
                  <p className="ml-4 text-lg leading-6 font-medium text-gray-900">Inline</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  <p className='font-semibold'>1. Height and width properties will have no effect on the element. <br />
                    2. Default property span, a ,img etc
                  </p>
                </dd>

                <dt>
                  <p className="ml-4 text-lg leading-6 font-medium text-gray-900">Block</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  <p className='font-semibold'>1. Height and width properties will have effect on the element. <br />2. It starts a new line.<br />
                    3. Default property div, h1 ,p etc
                  </p>
                </dd>

                <dt>
                  <p className="ml-4 text-lg leading-6 font-medium text-gray-900">Inline-block</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  <p className='font-semibold'>1. Height and width properties will have effect on the element.<br />
                    2. It does not start a new line.
                  </p>
                </dd>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

