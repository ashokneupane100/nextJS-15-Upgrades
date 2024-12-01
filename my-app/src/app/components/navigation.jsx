"use client";
import Link from 'next/link';
import {usePathname} from "next/navigation";
import { SignInButton,UserButton,SignedIn,SignedOut } from '@clerk/nextjs';

export default function Navigation() {
    const pathname=usePathname();
  return (
   <nav className='flex gap-10 p-3 mr-3 bg-slate-800 text-white'>
    <Link href="/" className={pathname==="/" ? 'font-bold mr-4':"text-blue-400 mr-4"} >Home</Link>
    <Link href="/about" className={pathname==="/about" ? 'font-bold mr-4':"text-blue-400 mr-4"} >About</Link>
    <Link href="/products/1" className={pathname.startsWith("/products/1") ? 'font-bold mr-4':"text-blue-400 mr-4"} >Home</Link>
   <SignedOut>
   <SignInButton mode="modal" />
   </SignedOut>
   <SignedIn>
   <UserButton/>
   </SignedIn>
   </nav>
  )
}
