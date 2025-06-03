"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const path = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/questions', label: 'Questions' },
        { href: '/dashboard/upgrade', label: 'Upgrade' },
    ];
    const { theme, setTheme } = useTheme()

    return (
        <div className='relative'>
            <div className='flex p-5 items-center justify-between bg-gray-900 text-white shadow-sm'>
            <Link href="/">
      <Image src="/head.png" width={130} height={100} alt="logo" />
    </Link>
                
                {/* Desktop Menu */}
                <ul className='hidden md:flex gap-6'>
                    {menuItems.map((item) => (
                        <Link href={item.href} key={item.href}>
                            <li className={`hover:text-primary hover:font-bold transition-all
                                cursor-pointer
                                ${path === item.href && 'text-primary font-bold'}`
                            }>
                                {item.label}
                            </li>
                        </Link>
                    ))}
                </ul>
                <div className='flex flex-row gap-5 items-center'>
                    {/* <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button> */}
                    <div className=''>
                        <UserButton/>
                    </div>
                {/* Mobile Menu Button */}
                <button 
                    className='md:hidden text-gray-600 focus:outline-none'
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" 
                        strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        {isMenuOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
</div>

            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='md:hidden absolute top-full left-0 right-0 bg-secondary shadow-md py-2 z-50'>
                    <ul className='flex flex-col'>
                        {menuItems.map((item) => (
                            <Link href={item.href} key={item.href}>
                                <li 
                                    className={`px-5 py-2 hover:bg-gray-100 cursor-pointer
                                    ${path === item.href && 'text-primary font-bold'}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </li>
                            </Link>
                        ))}
                    </ul>
                    {/* <div className='px-5 py-2'>
                        <UserButton/>
                    </div> */}
                </div>
            )}

        </div>
    )
}

export default Header