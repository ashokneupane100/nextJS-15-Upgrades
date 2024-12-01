import React from 'react'

export default async function UsersServer() {
    await new Promise((resolve)=>setTimeout(resolve,3000))
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const users=await res.json();
  return (
    <ul className='space-y-4 p-4'>
    {users.map((user) => (
        <li key={user.id} className='p-4 bg-white shadow-md rounded-lg text-gray-700'>
            {user.name} ({user.email})
        </li>
    ))}
</ul>
  )
}
