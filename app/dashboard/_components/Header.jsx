"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 shadow-md">
    {/* Logo */}
    <Link href="/">
      <Image src="/aiMock.png" width={60} height={10} alt="logo" className="cursor-pointer" />
    </Link>

    {/* Navigation Links */}
    <ul className="hidden md:flex space-x-6 text-white font-medium">
      <NavItem href="/dashboard" label="Dashboard" path={path} />
      <NavItem href="/dashboard/questions" label="Questions" path={path} />
      <NavItem href="/dashboard/how" label="How it Works?" path={path} />
    </ul>

    {/* User Button */}
    <UserButton />
  </nav>
  )
}

const NavItem = ({ href, label, path }) => (
  <Link href={href}>
    <li className={`cursor-pointer transition-all hover:text-yellow-400 ${path === href ? "text-yellow-400 font-bold" : "text-gray-300"}`}>
      {label}
    </li>
  </Link>
);

export default Header