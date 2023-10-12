"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image'
import user from '../assets/image/user.jpg'
import quran from '../assets/image/quran.png'
import '../styles/Home.css'
import Link from 'next/link';

const NavbarSecondary = () => {
    const [stickyClass, setStickyClass] = useState("0");
    const me = {
        firstName: "Rohul",
        lastName: "Amin",
        imageURL: false

    }

    function stickNavbar() {
        let windowHeight = window.scrollY;
        windowHeight >= 100 ? setStickyClass("sticky-nav") : setStickyClass("");
    }

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
    }, []);


    return (
        <div className={`${stickyClass} bg-header w-full `}>
            <div style={{ maxWidth: "1280px" }} className={`w-full mx-auto py-1 flex justify-between items-center w-7xl duration-300  px-2 text-white`}>
                <div className="">
                    <Image src={quran} width={50} height={50} alt='quran' />
                </div>
                <div>
                    <ul className='flex font-all gap-x-4 justify-center items-center'>
                        <li>
                            <Link href='/'>হুম</Link>
                        </li>
                        <li>
                            <Link href='/about'>এবাউট</Link>
                        </li>
                        <li>
                            <Link href='/blog'>ব্লক</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div style={{ width: "40px", height: "40px" }} className="w-[40px] h-[40px] rounded-full ring ring-purple-700 ring-offset-base-100 ring-offset-2">
                                <Image
                                    src={user}
                                    width={40}
                                    height={40}
                                    alt="Picture of the author"
                                />
                            </div>
                        </label>
                        <ul tabIndex={0} style={{ color: "#fff", background: "#5b34c7ec" }} className="mt-3 z-[1] p-3 pt-5 shadow menu menu-sm dropdown-content gradient1 rounded-box w-52">
                            <div className='w-full flex justify-center'>
                                <div style={{ width: "60px", height: "60px", background: '#357194' }} className=" rounded-full flex items-center justify-center ring ring-purple-600 ring-offset-base-100 ring-offset-2">
                                    <h2 className='text-2xl  uppercase font-bold '>{me?.firstName?.slice(0, 1)}{me?.lastName?.slice(0, 1)}</h2>
                                </div>
                            </div>
                            <p className='font-bold text-center text-xl mt-2 text bg-gradient-to-r from-white to-purple-600'>{me?.firstName} {me?.lastName}</p>
                            <ul className='mt-5'>
                                <li><a>Dashboard</a></li>
                                <li><a>Profile</a></li>
                                <li><a>Settings</a></li>
                                <li className='bg-red-500'><a>Logout</a></li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarSecondary;