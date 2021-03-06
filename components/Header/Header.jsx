import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Sign In', href: '/sign-in', current: false },
    { name: 'Sign Out', href: '/sign-out', current: false },
    // { name: 'Reviews', href: '/review-page', current: false },
    // { name: 'Blogs', href: '/blog-page', current: false },
    // { name: 'Dashboard', href: '/dashboard', current: false },
]

const activeStyle = ({ isActive }) => { return { color: isActive ? "rgb(234 179 8 / 1)" : "" } }


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {

    const router = useRouter();
    return (
        <Disclosure as="nav" className="bg-green-600">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => {

                                            return (
                                                <Link
                                                    href={item.href}
                                                    key={item.name}
                                                    passHre 
                                                >
                                                    <a className={`bg-transparent ${router.pathname === item.href ? 'text-red-500':'text-white'} hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium`}>
                                                        {item.name}
                                                    </a>

                                                </Link>


                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}
