import React from 'react';
import commonName from '../utils/commonName';
import date from '../utils/date';

export default function Comments({ comments, fetching, setRemoveCommentsTemp }) {

    return (
        <div className='w-full p-[5px]'>
            {
                fetching || !comments?.length ? '' :
                    <div onClick={() => setRemoveCommentsTemp(true)} className='top-[-10px] right-0 p-[10px] text-[#ccc] absolute cursor-pointer'>x</div>
            }
            {
                fetching ?
                    <div className='text-white w-full'>Loading...</div> :
                    !comments?.length ? "" :
                        comments?.map((data, i) => {
                            return (
                                <div key={i} className=' w-full flex gap-2 md:p-[5px] p-[10px] mb-[10px]'>
                                    <img src="/profile.png" alt="profile-pic" className='w-[45px] h-[45px] rounded-full' />
                                    <div className='text-white w-full'>
                                        <div className='font-bold'>
                                            <div className='text-[.9rem]'>{commonName(data.name ? data.name : '')}</div>
                                            <div className='text-[.7rem] text-[#cecece]'>{date.date(data?.createdAt)}; {date.time(data?.createdAt)}</div>
                                        </div>
                                        <div className='text-[.8rem]'>{data.body}</div>
                                    </div>
                                </div>
                            )
                        })
            }
        </div>
    )
}

