import React from 'react'

export default function Form() {
    return (
        <div className='md:w-[350px] w-full flex justify-center'>
            <form className='bg-white bg-opacity-20 p-[10px] h-150px max-h-[370px]'>
                <div>
                    <textarea
                        placeholder='Tribute *'
                        className='bg-[transparent] border-[1px] border-[#ccc] w-[100%]'
                    ></textarea>
                </div>

                <div className='flex gap-2'>
                    <input
                        placeholder='name *'
                        className='flex-grow-0 bg-[transparent] border-[1px] border-[#ccc] w-[100%]'
                    />
                    <input
                        placeholder='email'
                        className='flex-grow-0 bg-[transparent] border-[1px] border-[#ccc] w-[100%]'
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
    )
}
