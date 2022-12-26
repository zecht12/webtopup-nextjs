import React from 'react'
import { useRef, useState } from 'react'
import {ImMinus} from 'react-icons/im'
import {GrSearch} from 'react-icons/gr'

const Periksapesanan = () => {
    const clickPoint = useRef();
    const handleFocus = () => {clickPoint.current.style.display = "none";};

    const handleBlur = () => {clickPoint.current.style.display = "block";};


  return (
    <div className='h-screen w-full'>
        <div className='h-full w-full pt-28 px-6 pb-12'>
            <div>
                <span className='flex gap-2 font-bold text-xl'><ImMinus/> Periksa pesanan</span>
            </div>
            <div className=' min-h-screen w-full pb-12'>
            <div className='shadow-xl w-full h-full rounded-lg shadow-gray-400 p-6 '>
                <span className='flex gap-2 font-bold text-xl'>Kode Invoice</span>
            <div className='pb-10'>
                <div className='relative'>
                    <div className="absolute top-3 left-2 items-center" ref={clickPoint}>
                        <GrSearch/>
                    </div>
                    <input type="text"className=' block pl-7 py-2 pl-8 w-50 text-gray-900 bg-white rounded-lg border border-black focus:pl-1'
                    placeholder="Masukkan Kode Invoice"onFocus={handleFocus}onBlur={handleBlur}/>
                </div>
                </div>
                <table className=' py-6 table-auto border border-y-black w-full'>
                <thead>
                    <tr>
                        <th className='text-center'>Layanan</th>
                        <th className='text-center'>Produk</th>
                        <th className='text-center'>Data</th>
                        <th className='text-center'>Harga</th>
                        <th className='text-center'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-center'>0001</td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                    </tr>
                    <tr>
                        <td className='text-center'>0002</td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                    </tr>
                    <tr>
                        <td className='text-center'>0003</td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                    </tr>
                    <tr>
                        <td className='text-center'>0004</td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                    </tr>
                    <tr>
                        <td className='text-center'>0005</td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                    </tr>
                    <tr>
                        <td className='text-center'>0006</td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Periksapesanan