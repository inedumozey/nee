import React, { useEffect, useState } from 'react'

export default function Form() {
    const [fix, setFix] = useState(false)
    // const [scrollY, setScrollY] = useState(0)
    window.onscroll = (e) => {
        if (window.scrollY > 110) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }

    return (
        <div>
            <div className='md:w-[350px] bg-red-500 hidden md:block h-[2px]'></div>

            <div className={`md:w-[350px] w-full flex justify-center ${fix ? 'fixed top-[2px]' : 'static'}`}>
                <form className={`bg-white ${fix ? 'bg-opacity-[.95]' : 'bg-opacity-20'} md:bg-opacity-20 p-[10px] h-150px max-h-[370px] rounded-sm`}>
                    <div>
                        <textarea
                            placeholder='Tribute *'
                            className={`bg-[transparent] border-[1px] border-[#ccc] w-[100%] ${fix ? 'text-[#888]' : 'text-white'}`}
                        ></textarea>
                    </div>

                    <div className='flex gap-2'>
                        <input
                            placeholder='name *'
                            className={`flex-grow-0 bg-[transparent] border-[1px] border-[#ccc] w-[100%]  {fix ? 'text-[#888]' : 'text-white'}`}
                        />
                        <input
                            placeholder='email'
                            className={`flex-grow-0 bg-[transparent] border-[1px] border-[#ccc] w-[100%] {fix ? 'text-[#888]' : 'text-white'}`}
                        />
                    </div>
                    <div className='pt-[5px]'>
                        <input
                            type='submit'
                            className='w-[100px] bg-red-500 p-[10px] rounded text-white cursor-pointer'
                        />
                    </div>
                </form>
            </div>
        </div>

    )
}
