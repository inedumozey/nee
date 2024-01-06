import React, { useEffect, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";
import commonName from '../utils/commonName';
import date from '../utils/date';

const data = [
    {
        name: "john doe",
        createdAt: "2024-02-05T20:48:00.546Z",
        updatedAt: "2024-02-05T30:48:00.546Z",
        body: "lohsgfs dhdgfd dhdfghf dfhdfvfd fgfbfbfyf fhgf f fhg"
    },
    {
        name: "Joe",
        createdAt: "2024-02-05T20:48:00.546Z",
        updatedAt: "2024-02-05T20:48:00.546Z",
        body: "lohsgfs dhdgfd dhdfghf dfhdfvfd fgfbfbfyf fhgf f fhg"
    },
    {
        name: "Ruki",
        createdAt: "2024-02-05T20:48:00.546Z",
        updatedAt: "2024-02-05T20:48:00.546Z",
        body: "lohsgfs dhdgfd dhdfghf dfhdfvfd fgfbfbfyf fhgf f fhg"
    },
    {
        name: "Hamza",
        createdAt: "2024-02-05T20:48:00.546Z",
        updatedAt: "2024-02-05T20:58:00.546Z",
        body: "lohsgfs dhdgfd dhdfghf dfhdfvfd fgfbfbfyf fhgf f fhg"
    },
    {
        name: "Meller",
        createdAt: "2024-02-05T20:48:00.546Z",
        updatedAt: "2024-02-05T20:48:00.546Z",
        body: "lohsgfs dhdgfd dhdfghf dfhdfvfd fgfbfbfyf fhgf f fhg"
    },
    {
        name: "john doe",
        createdAt: "2024-02-05T20:48:00.546Z",
        updatedAt: "2024-02-05T30:48:00.546Z",
        body: "lohsgfs dhdgfd dhdfghf dfhdfvfd fgfbfbfyf fhgf f fhg"
    },
    {
        name: "Joe",
        createdAt: "2024-02-05T20:48:00.546Z",
        updatedAt: "2024-02-05T20:48:00.546Z",
        body: "lohsgfs dhdgfd dhdfghf dfhdfvfd fgfbfbfyf fhgf f fhg"
    },
    {
        name: "Ruki",
        createdAt: "2024-02-05T20:48:00.546Z",
        updatedAt: "2024-02-05T20:48:00.546Z",
        body: "lohsgfs dhdgfd dhdfghf dfhdfvfd fgfbfbfyf fhgf f fhg"
    },
    {
        name: "Hamza",
        createdAt: "2024-02-05T20:48:00.546Z",
        updatedAt: "2024-02-05T20:58:00.546Z",
        body: "lohsgfs dhdgfd dhdfghf dfhdfvfd fgfbfbfyf fhgf f fhg"
    },
    {
        name: "Meller",
        createdAt: "2024-02-05T20:48:00.546Z",
        updatedAt: "2024-02-05T20:48:00.546Z",
        body: "lohsgfs dhdgfd dhdfghf dfhdfvfd fgfbfbfyf fhgf f fhg"
    },
    {
        name: "john doe",
        createdAt: "2024-02-05T20:48:00.546Z",
        updatedAt: "2024-02-05T30:48:00.546Z",
        body: "lohsgfs dhdgfd dhdfghf dfhdfvfd fgfbfbfyf fhgf f fhg"
    },
    {
        name: "Joe",
        createdAt: "2024-02-05T20:48:00.546Z",
        updatedAt: "2024-02-05T20:48:00.546Z",
        body: "lohsgfs dhdgfd dhdfghf dfhdfvfd fgfbfbfyf fhgf f fhg"
    },
    {
        name: "Ruki",
        createdAt: "2024-02-05T20:48:00.546Z",
        updatedAt: "2024-02-05T20:48:00.546Z",
        body: "lohsgfs dhdgfd dhdfghf dfhdfvfd fgfbfbfyf fhgf f fhg"
    },
    {
        name: "Hamza",
        createdAt: "2024-02-05T20:48:00.546Z",
        updatedAt: "2024-02-05T20:58:00.546Z",
        body: "lohsgfs dhdgfd dhdfghf dfhdfvfd fgfbfbfyf fhgf f fhg"
    },
    {
        name: "Meller",
        createdAt: "2024-02-05T20:48:00.546Z",
        updatedAt: "2024-02-05T20:48:00.546Z",
        body: "lohsgfs dhdgfd dhdfghf dfhdfvfd fgfbfbfyf fhgf f fhg"
    },
]

export default function Comments() {
    const [fetching, setFetching] = useState(false)
    const [comments, setComments] = useState([])


    useEffect(() => {
        setComments(data)
    }, [])



    return (
        <div className='w-full p-[5px]'>
            {
                fetching ?
                    <div className='text-white'>Loading...</div> :
                    !comments.length ?
                        <div className='text-white text-center w-full'>No Data</div> :
                        comments.map((data, i) => {
                            return (
                                <div key={i} className=' w-full flex gap-2 md:p-[5px] p-[10px] mb-[15px]'>
                                    <img src="/profile.png" alt="profile-pic" className='w-[45px] h-[45px] rounded-full' />
                                    <div className='text-white w-full'>
                                        <div className='font-bold'>
                                            <span className='text-[1.2rem]'>{commonName("john doe")}</span>
                                            {" - "}
                                            <span className='text-[.7rem] text-[#9c9b9b]'>{date("2024-02-05T20:48:00.546Z")}</span>
                                        </div>
                                        <div className='text-[.9rem]'>
                                            loeiuehehg
                                        </div>
                                    </div>
                                </div>
                            )
                        })
            }
        </div>
    )
}

