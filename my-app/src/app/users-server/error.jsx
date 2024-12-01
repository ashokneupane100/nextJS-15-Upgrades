"use client";
import React from 'react'
export default function Error({error}) {
    useEffect(()=>{
        console.log(error)
    },[error])
  return (
    <div>
        <div className='text-2xl text-red-500'>
        Error fetching the data...
        </div>


    </div>
  )
}
