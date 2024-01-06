import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Alert } from "@mozeyinedu/react-lab"

export default function Form({ getAddedComment, setRemoveFormTemp, setRemoveCommentsTemp }) {
    const [fix, setFix] = useState(false)
    const [sending, setSending] = useState(false)
    const totalWordCount = 1000;
    const [wordCounts, setWordCounts] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [body, setbBody] = useState("");
    const [msg, setMsg] = useState({ text: "", type: '' })

    const handleBody = (e) => {
        setbBody(e.target.value)
        setWordCounts(e.target.value.length)
    }

    const submit = async (e) => {
        e.preventDefault()
        setSending(true)

        try {
            const { data } = await axios.post('/', { body, name, email })
            getAddedComment(data.data)
            setMsg({ text: data.msg, type: 'success' })
            setName("")
            setbBody("")
            setEmail("");
            setSending(false)
            setRemoveCommentsTemp(false)
        }
        catch (e) {
            if (e.response) {
                setMsg({ text: e.response.data.msg, type: 'error' })
            }
            else {
                setMsg({ text: e.message, type: 'error' })
            }
            setSending(false)
        }
    }

    useEffect(() => {
        window.onscroll = (e) => {
            window.scrollY > 109 ? setFix(true) : setFix(false)
        }
    }, [fix])


    return (
        <div>
            <div className='md:w-[350px] bg-red-500 hidden md:block h-[2px] z-[100]'></div>

            <div className={`md:w-[350px] w-full flex justify-center ${fix ? 'fixed top-[10px] md:left-[10px] left-0 right-0' : 'static'}`}>
                <form onSubmit={submit} className={`bg-white ${fix ? 'bg-opacity-[1]' : 'bg-opacity-20'} md:bg-opacity-20 p-[10px] h-150px max-h-[370px] rounded-b-md`}>

                    <div className='bg-white rounded-[10px]'>
                        <Alert show={msg.text} type={msg.type} >{msg.text}</Alert>
                    </div>

                    <div onClick={() => setRemoveFormTemp(true)} className='text-right text-[#ccc] cursor-pointer'>x</div>

                    <div className={`text-left ${fix ? 'text-[#888]:text-[#888] md:text-[#fff]' : 'text-[#fff]'} text-[.6rem]`}>{`${wordCounts}/${totalWordCount}`}</div>

                    <div>
                        <textarea
                            placeholder='Tribute *'
                            value={body}
                            maxLength={totalWordCount}
                            onChange={handleBody}
                            className={`bg-[transparent] border-[1px] border-[#ccc] w-[100%] ${fix ? 'text-[#888] placeholder:text-[#fff] md:placeholder:text-[#fff] md:text-white' : 'text-white placeholder:text-[#fff]'}`}
                        ></textarea>
                    </div>

                    <div className='flex gap-2'>

                        <input
                            placeholder='Name *'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`flex-grow-0 bg-[transparent] border-[1px] border-[#ccc] w-[100%] ${fix ? 'text-[#888] placeholder:text-[#888] md:placeholder:text-[#fff] md:text-white' : 'text-white placeholder:text-[#fff]'}`}
                        />

                        <input
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`flex-grow-0 bg-[transparent] border-[1px] border-[#ccc] w-[100%] ${fix ? 'text-[#888] placeholder:text-[#888] md:placeholder:text-[#fff] md:text-white' : 'text-white placeholder:text-[#fff]'}`}
                        />
                    </div>
                    <div className='pt-[5px]'>
                        <input
                            type="submit"
                            value={sending ? 'Loading...' : "Send"}
                            className='w-[100px] bg-red-500 p-[10px] rounded text-white cursor-pointer'
                        />
                    </div>
                </form>
            </div>
        </div>

    )
}
