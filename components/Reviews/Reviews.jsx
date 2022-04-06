import { StarIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react';
export default function Reviews({ data }) {


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <div className="container my-24 px-6 md:px-12 mx-auto">

                <section className="mb-32 text-gray-800 text-center">

                    <h2 className="text-3xl font-bold mb-12">What customer say about us ?</h2>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-x-12 place-items-center">
                        {
                            data.map(item => {
                                const { id, name, review, ratings } = item
                                return (

                                    <div className="" key={id}>
                                        <div className="block p-6 rounded-lg shadow-lg bg-white border-2 max-w-sm" style={{ width: "50em" }}>
                                            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{name}</h5>
                                            <p className="text-gray-700 text-base mb-4">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
                                                    className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                                                    </path>
                                                </svg>
                                                {review}
                                            </p>
                                            <div className="flex justify-center mb-0">
                                                <div className="mt-6">
                                                    <h3 className="sr-only">Reviews</h3>
                                                    <div className="flex items-center relative">
                                                        <div className="flex items-center">

                                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                                <StarIcon
                                                                    key={rating}
                                                                    className={classNames(
                                                                        ratings > rating ? 'text-yellow-600' : 'text-gray-200',
                                                                        'h-5 w-5 flex-shrink-0'
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                )

                            })
                        }



                    </div>
                    {
                        data?.length === 3 ?
                            (
                                <Link href="/review-page" >
                                    <button type="button" className="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-16">Explore more reviews</button>
                                </Link>

                            ) :
                            (
                                <Link href="/">
                                    <button type="button"  className="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-16">Back to home</button>
                                </Link>

                            )
                    }



                </section>

            </div>
        </>

    )
}
