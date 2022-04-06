import React from 'react'

export default function HeroSection() {
  return (

    <>

    
      <section className="">
        <div className="px-6 py-12 md:px-12 bg-gray-100 text-gray-800 text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="mt-12 lg:mt-0">
                <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                  <span className='text-yellow-500'>Winter styles</span> are finally here
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  This year, our new winter collection for men, women and kids in Bangladesh. Get the best prices on winter collection clothes, dresses, gadgets and more today!
                </p>

              </div>
              <div className="mb-12 lg:mb-0" style={{height:"80vh"}}>
                <img
                  src="/images/model.jpg"
                  className="w-full h-full rounded-lg shadow-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>



    </>

  )
}
