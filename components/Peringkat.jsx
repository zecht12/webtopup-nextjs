import React from 'react'
import { useRef, useState } from 'react'
import {ImMinus} from 'react-icons/im'
import {GrSearch} from 'react-icons/gr'

const Peringkat = () => {
    const clickPoint = useRef();
    const handleFocus = () => {clickPoint.current.style.display = "none";};

    const handleBlur = () => {clickPoint.current.style.display = "block";};


  return (
    <div className='h-screen w-full'>
        <div className='h-full w-full pt-28 px-6 pb-12'>
            <div>
                <span className='flex gap-2 font-bold text-xl'><ImMinus/> 10 Peringkat User</span>
            </div>
            <div className=' min-h-screen w-full pb-12'>
            <div className='shadow-xl w-full h-full rounded-lg shadow-gray-400 p-6 '>
                <span className='pb-12 flex gap-2 font-bold text-xl'>Top 10 User</span>
                <table className=' py-6 table-auto border border-y-black w-full'>
                <thead>
                    <tr>
                        <th>Peringkat No</th>
                        <th className='text-center'>Username</th>
                        <th className='text-center'>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                    </tr>
                    <tr>
                        <td>10</td>
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

export default Peringkat