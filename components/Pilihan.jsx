import React from 'react'
import Image from 'next/image'
import {GrGamepad} from 'react-icons/gr'
import Link from 'next/link'
import voucher from '../public/assets/voucher.png'

const Pilihan = () => {
  return (
    <div>
        <div id='Pilihan' className="bg-orange-500 py-8">
            <div className=' flex justify-center'>
                <div className='flex max-w-[1000px] justify-around m-auto md:grid-cols-3 gap-8'>
                    <Link href='/'>
                        <GrGamepad size={30}/>
                    </Link>
                </div>
                <div className='flex max-w-[1000px] justify-around m-auto md:grid-cols-3 gap-8'>
                    <Link href='/Pagepromo'>
                        <Image src={voucher} alt="voucher" width="35" height="auto"/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)
}

export default Pilihan