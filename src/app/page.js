"use client"

import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import axios from 'axios';
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
      <form>

      </form>
    </div>
  )
}



{/* <Alart type='success' hide={true} onHide={() => { console.log("hidden") }}>
        <div>Error</div>
      </Alart> */}