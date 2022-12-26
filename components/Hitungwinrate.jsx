import React from 'react'
import {ImMinus} from 'react-icons/im'

const Hitungwinrate = () => {
  return (
    <div className="flex min-h-screen pt-28 px-12">
        <div className="w-full space-y-8">
        <div>
            <span className='flex gap-2 font-bold text-xl'><ImMinus/>Hitung Winrate</span>
        </div>
            <div className=' min-h-screen w-full pb-12'>
            <div className='shadow-xl w-full h-full rounded-lg shadow-gray-400 p-6 '>
        <div className=' text-center font-bold text-2xl'>
            Hitung Winrate yang Anda Inginkan
        </div>
        <form className="mt-8 " action="#" method="POST">
        <div className=' md:gap-96 gap-8'>
        <div>
            <input type="hidden" name="remember" defaultValue="true" />
            <span className=''>Masukkan jumlah match</span>
            <div className="-space-y-px rounded-md shadow-sm pt-4 pb-12">
                <div>
                <label htmlFor="Jumlah-match" className="sr-only">
                    Jumlah-match
                </label>
                <input
                    id="Jumlah-match"
                    name="Jumlah-match"
                    type="number"
                    autoComplete="number"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-1 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                    placeholder="Masukan jumlah match"
                />
            </div>
            </div>

            <input type="hidden" name="remember" defaultValue="true" />
            <span className=''>Masukkan Winrate saat ini</span>
            <div className=" -space-y-px rounded-md shadow-sm pt-4 pb-12">
                <div>
                <label htmlFor="winrate" className="sr-only">
                winrate
                </label>
                <input
                    id="winrate"
                    name="winrate"
                    type="number"
                    autoComplete="number"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                    placeholder="Masukkan Winrate saat ini"
                />
            </div>
            </div>


            <input type="hidden" name="remember" defaultValue="true" />
            <span>Masukkan Winrate yang dinginkan</span>
            <div className=" -space-y-px rounded-md shadow-sm pt-4 pb-12">
                <div>
                <label htmlFor="Keinginan-winrate" className="sr-only">
                Keinginan-winrate
                </label>
                <input
                    id="Keinginan-winrate"
                    name="Keinginan-winrate"
                    type="number"
                    autoComplete="number"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                    placeholder="Masukan Winrate yang diinginkan"
                />
            </div>
            </div>

            </div>
            </div>
            <div className='text-center mt-16 md:mt-auto py-12'>
                <button type="submit"className="px-3 py-2 text-center rounded-md text-white bg-black ">
                Submit
                </button>
            </div>
            </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hitungwinrate