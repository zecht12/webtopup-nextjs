import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Logo from '../public/assets/logo.png'
import { Menu } from '@headlessui/react'
import {GrLogin} from 'react-icons/gr'


function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-1/3 bg-orange-500 transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter `}>
            
            <div className="flex flex-col w-auto h-auto mt-28 pl-10">
                <a className="text-2xl font-bold hover:text-black my-4" href="/" >
                    Beranda
                </a>
                <a className="text-2xl font-bold my-4 hover:text-black" href="./Pageperiksapesanan" >
                    Periksa Pesanan
                </a>
                <a className="text-2xl font-bold my-4 hover:text-black" href="./Pageperingkat" >
                    Peringkat
                </a>
                <a className="text-2xl font-bold my-4 hover:text-black" href="./Pagehitungwinrate" >
                    Hitung Winrate
                </a>
                <a className="text-2xl font-bold my-4 hover:text-black" href="./Pageaboutus" >
                    About Us 
                </a>
            </div>  
        </div>
    )
}

const NavBar = () => {
    const [nav, setNav] = useState(false)


    const handleNav = () => {
        setNav(!nav)
    }

    const [open, setOpen] = useState(false)


    return (
    <div>
        <div className={nav ?  "fixed w-full h-20 shadow-xl z-[100] bg-orange-500" : " bg-orange-500 fixed w-full h-20 shadow-xl z-[100]"}>
            <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16'>
                <div>
                    <div className='pb-10'>
                        <nav>
                        <MobileNav open={open} setOpen={setOpen}/>
                            <div className="w-11/12 flex justify-end items-center">
                                <div className="group z-50 relative w-6 h-6 mt-10 cursor-pointer flex-col justify-between items-center flex" onClick={() => {
                                    setOpen(!open)
                                    }}>
                                    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                                    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                                    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className=' ml-16'>
                    <Image src={Logo} alt="LOGO" width={30} height={30}/>
                </div>
                <div>
                    <div>
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button className='flex w-full justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500 id="menu-button" aria-expanded="true" aria-haspopup="true"'>
                                <GrLogin size={25} className='pr-1 text-lg'/>Login
                            </Menu.Button>
                            <Menu.Items className="absolute right-0 mt-2 w-56 h-24 origin-top-right divide-y border border-black divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="px-1 py-1 ">
                                    <Menu.Item>
                                    {({ active }) => (
                                    <Link href='/SignInpage' className={`${ active ? 'bg-transparent shadow-lg text-black' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}> Sign In
                                    </Link>
                                    )}
                                    </Menu.Item>
                                    <Menu.Item>
                                    {({ active }) => (
                                        <Link href='/Signuppage' className={`${ active ? 'bg-transparent shadow-lg text-black' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}> Sign Up
                                        </Link>
                                    )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default NavBar