import React from 'react'
import Image from 'next/image'
import genshin from '../public/assets/genshin.png'
import pubg from '../public/assets/pubg.png'
import lol from '../public/assets/lol.png'
import ml from '../public/assets/ml.png'

const Games = () => {
  return (
  <div>
    <div className='h-screen w-full justify-center py-32'>
      <div className='flex max-w-[1000px] justify-around m-auto md:grid-cols-3 gap-8'>
          <a href=''>
            <Image src={genshin} alt="GENSHIN" width="100" height="auto"/>
          </a>
          <a href=''>
            <Image src={pubg} alt="PUBG" width="100" height="auto"/>
          </a>
        </div>
        <div className='flex max-w-[1000px] justify-around m-auto md:grid-cols-3 gap-8 pt-32'>
          <a href=''>
            <Image src={ml} alt="ML" width="100" height="auto"/>
          </a>
          <a href=''>
            <Image src={lol} alt="LOL" width="100" height="auto"/>
          </a>
        </div>
    </div>
  </div>
  )
}

export default Games