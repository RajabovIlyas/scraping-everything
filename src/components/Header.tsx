'use client'

import Link from 'next/link';
import { useState } from 'react';
import {menuItems} from "@/constants/menu-item.constant";
import Image from "next/image";


const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className='mx-auto max-w-screen-xl'>
            <header>
                <div className='flex-col items-center justify-between p-5 lg:flex lg:flex-row'>
                    <div className='flex items-center justify-between lg:block'>
                        <Link href='/' className='header-link-icon'>
                            <Image src="/logo.svg" alt="logo" className="w-6 h-6" width={24} height={24}/>
                            <span>Scraping</span>
                        </Link>
                        <div className='flex items-center justify-center gap-2 lg:hidden'>
                            <button
                                className='block'
                                hidden={mobileMenuOpen}
                                onClick={() =>
                                    setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen)
                                }
                            >
                                {mobileMenuOpen ? (
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 16 16'
                                        fill='currentColor'
                                        className='header-link h-7 w-7'
                                    >
                                        <path d='M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z' />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        className='header-link h-7 w-7'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div
                        className='absolute left-0 right-0 z-10 w-auto border-b bg-white px-5 py-2 dark:bg-gray-950 lg:hidden lg:border-b-0'
                        hidden={!mobileMenuOpen}
                    >
                        <div className='flex flex-col'>
                            <nav>
                                <ul className='gap-4 lg:flex'>
                                    {menuItems.map(({ title, path }) => (
                                        <li
                                            key={title}
                                            className='header-link items-center py-2 lg:px-3'
                                        >
                                            <Link href={path}>{title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div className='flex items-center justify-center gap-4'>
                            <button className='w-full rounded  border-2  border-transparent bg-gray-100 px-4 py-2 text-center ring-gray-200 ring-offset-2 transition hover:bg-gray-200 focus-visible:ring-2 dark:border-zinc-400 dark:bg-zinc-400 dark:text-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-200'>
                                Log in
                            </button>
                            <button className='w-full  rounded  border-2 border-transparent bg-black px-4 py-2 text-center text-white ring-gray-200 ring-offset-2 transition hover:bg-gray-800 focus-visible:ring-2 dark:border-zinc-400 dark:bg-gray-950  dark:text-zinc-400 dark:hover:bg-zinc-950'>
                                Sign up
                            </button>
                        </div>
                    </div>

                    <div className='order-1 hidden w-full items-center justify-between lg:order-none lg:flex lg:w-auto'>
                        <nav>
                            <ul className='hidden gap-4 lg:flex'>
                                {menuItems.map(({ title, path }) => (
                                    <li
                                        key={title}
                                        className='header-link items-center py-2 lg:px-3'
                                    >
                                        <Link href={path}>{title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className='hidden items-center gap-4 lg:flex'>
                        <Link href='#' className='header-link'>
                            Log in
                        </Link>
                        <Link href='/'>
                            <button className='header-button'>Sign up</button>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
