"use client";
import React from 'react';
import {useRouter} from 'next/navigation';

export default function About() {
  const router=useRouter();
  return (
    <div>
      <h1>
        About Us:
      </h1>
      <button className='bg-blue-600 text-white rounded-lg p-3' onClick={()=>router.push("/")}>Go Home</button>

    </div>
  )
}

//this is the latest version BUT I HAVE
// TO SOLVE THE PROBLEM