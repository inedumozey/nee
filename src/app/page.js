"use client"

import React, { useEffect, useState, useRef } from 'react'
import Header from './components/Header';
import ScrollToTop from "react-scroll-to-top";
import axios from 'axios';
import { FaPlay, FaPause } from "react-icons/fa";
import Form from './components/Form';
import Comments from './components/Comments';
// axios.defaults.baseURL = 'http://localhost:4000/api/v1';
axios.defaults.baseURL = 'https://nee-server.onrender.com/api/v1';


export default function Home() {
  const [fetching, setFetching] = useState(true);
  const [isplaying, setIsplaying] = useState(false);
  const [removeFormTemp, setRemoveFormTemp] = useState(false);
  const [removeCommentsTemp, setRemoveCommentsTemp] = useState(false);
  const [fetchingMore, setFetchingMore] = useState(false);
  const [count, setCount] = useState(20);
  const [comments, setComments] = useState([]);

  const getAddedComment = (data) => {
    setComments(prev => [data, ...prev])
  }

  // audio
  const audioElem = useRef(null);

  const fetch = async () => {
    try {
      const { data } = await axios.get('/')
      setComments(data.data)
      setFetching(false)
    }
    catch (e) {
      setFetching(false)
    }
  };

  useEffect(() => {
    fetch();
  }, [])

  useEffect(() => {
    isplaying ?
      audioElem.current.play() :
      audioElem.current.pause()
  }, [isplaying])


  return (
    <div>
      {/* header */}
      <Header />
      <div className='flex md:flex-row flex-col gap-3 p-[5px] md:pl-[10px] md:pr-[10px]'>
        {/* form */}
        {
          removeFormTemp ? '' :
            <Form getAddedComment={getAddedComment} setRemoveFormTemp={setRemoveFormTemp} setRemoveCommentsTemp={setRemoveCommentsTemp} />
        }
        {/* comments */}
        {
          removeCommentsTemp ? '' :
            <Comments comments={comments} fetching={fetching} setRemoveCommentsTemp={setRemoveCommentsTemp} />
        }
      </div>

      <ScrollToTop smooth color="var(--major-color-purest)" style={{ background: 'rgba(0,0,0,.2)' }} />

      <div onClick={() => setIsplaying(!isplaying)} className='fixed flex justify-center items-center bottom-2 left-2 w-[30px] h-[30px] rounded-full bg-white cursor-pointer z-[100]'>

        {
          isplaying ?
            <FaPause className='text-black' /> :
            <FaPlay className='text-black' />
        }
      </div>

      <audio src="music.mp3" type="audio/mpeg" ref={audioElem} />
    </div>
  )
}