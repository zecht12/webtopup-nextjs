import React from 'react'
import Image from 'next/image'
import playstation from '../public/assets/playstation.png'
import playstore from '../public/assets/playstore.png'
import smartphone from '../public/assets/smartphone.png'
import steam from '../public/assets/steam.png'

const Voucher = () => {
return (
<div>
    <div className='h-screen w-full justify-center py-28'>
        <div className='flex max-w-[1000px] justify-around m-auto md:grid-cols-3 gap-8'>
            <a href=''>
                <Image src={playstation} alt="GENSHIN" width="100" height="auto"/>
            </a>
            <a href=''>
                <Image src={playstore} alt="PUBG" width="100" height="auto"/>
            </a>
        </div>
        <div className='flex max-w-[1000px] justify-around m-auto md:grid-cols-3 gap-8 pt-32'>
            <a href=''>
                <Image src={smartphone} alt="ML" width="100" height="auto"/>
            </a>
            <a href=''>
                <Image src={steam} alt="LOL" width="100" height="auto"/>
            </a>
        </div>
    </div>
</div>
)
}

export default Voucher