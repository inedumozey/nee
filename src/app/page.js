"use client"

import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import axios from 'axios';
import Form from './components/Form';
import Comments from './components/Comments';
// import {Alart} from "@mozeyinedu/react-lab"


export default function Home() {
  const { fetching, setFetching } = useState(true);
  const { fetchingMore, setFetchingMore } = useState(false);
  const { count, setCount } = useState(20);

  const fetch = async () => {
    try {
      setFetching(false)
    }
    catch (e) {
      setFetching(false)
    }
  }
  return (
    <div>
      {/* header */}
      <Header />
      <div className='flex md:flex-row flex-col gap-3 p-[5px] md:pl-[10px] md:pr-[10px]'>
        {/* form */}
        <Form />

        {/* comments */}
        <Comments />
      </div>
    </div>
  )
}



{/* <Alart type='success' hide={true} onHide={() => { console.log("hidden") }}>
        <div>Error</div>
      </Alart> */}