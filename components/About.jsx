import React from 'react'
import Image from 'next/image'

const About = () => {
return (
  <div>
    <div id='about' className='w-full md:h-screen text-center bg-orange-500'>
        <div className='max-w-[800px] h-full pt-36 text-black m-auto'>
            <div>
              <p className='text-4xl p-3 text-bold'><strong>ABOUT US</strong></p>
              <p className='pt-11 text-slate-200'>Situs kamiadalah platform Top Up Termurah di Indonesia,Kami menawarkan Beberapa Produk Seperti Kredit Game, Voucher Serta jasa lainnya Kami selalu memberikan kenyamanan untuk anda, Maka dari itu kami selalu ber inovasi untuk membuat situs kami selalu diminati oleh masyarakat Indonesia.
                Situs kami Mempunyai Visi yaitu Menjadikan Platform Top Up Termurah untuk masyarakat Indonesia terutama bagi para Gamers Sejati.</p>
            </div>
            <div>
                <div>
                  <h4 className='text-2xl pt-10'><strong>HUBUNGI KAMI</strong></h4>
                </div>
                <div className='py-6 text-lg'>
                  <a href='https://wa.me/6285865130221'>WHATSAPP
                  </a>
                </div>
                <div className='text-lg'>
                  <a href='https://instagram.com/gilangprimae?igshid=YmMyMTA2M2Y='>INSTAGRAM
                  </a>
                </div>
            </div>
        </div>
    </div>
  </div>
)
}

export default About