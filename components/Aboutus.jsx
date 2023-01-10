import React from 'react'
import Image from 'next/image'
import Logo from '../public/assets/logo.png'
import {ImMinus} from 'react-icons/im'
import Link from 'next/link'

export default function Aboutus () {
  return (
    <div className='min-h-screen w-full'>
    <div className='h-full w-full px-6'>
        <div className=' pt-28 pb-16'>
            <span className='flex gap-2 font-bold text-xl'><ImMinus/> About Us</span>
        </div>
        <div className=' min-h-screen w-full pb-12'>
        <div className='shadow-xl w-full h-auto grid justify-center items-center rounded-lg shadow-gray-400 p-6 '>
            <div className='flex items-center justify-center pb-6'>
                <Image src={Logo} alt="LOGO" width={30} height={30}/>
            </div>
            <div className='grid md:px-40 text-center'>
                <p className='uppercase'>situs layanan topup game favoritemu dengan penglaman pembelian voucher game tanpa repot. kami menyediakan banyak pilihan game kesayangan anda serta beberapa layanan kebutuhan anda.</p>
            </div>
            <div className='md:grid md:grid-cols-4 text-center px-16 py-24'>
                <div className=' uppercase font-bold text-xl'>
                    <Link href="./">tentang kami</Link>
                </div>
                <div className=' uppercase font-bold text-xl'>
                    <Link href="./">kebijakan privasi</Link>
                </div>
                <div className=' uppercase font-bold text-xl md:pl-20'>
                    <Link href="./">faq</Link>
                </div>
                <div className=' uppercase font-bold text-xl'>
                    <Link href="./">ketentuan layanan</Link>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
  )
}

