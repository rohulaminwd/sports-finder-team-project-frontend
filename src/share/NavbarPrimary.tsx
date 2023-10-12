"use client"


import React, { useContext } from 'react';
import { usePathname } from 'next/navigation';
import { AiFillHome, AiOutlineHome, AiOutlineSetting } from 'react-icons/ai'
import { FaBlogger } from 'react-icons/fa'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react';
import { HiOutlineLogout } from 'react-icons/hi';
import { useEffect } from 'react';
import { MdOutlineDashboardCustomize, MdOutlineManageAccounts, MdSchool } from 'react-icons/md';
import LogOutModule from '@/modules/LogOutModule';
import UserProfileImg from '@/components/ui/UserProfileImg';
import Link from 'next/link';

const NavbarPrimary = ({ }) => {
    const usertoken = true
    const [logout, setLogout] = useState<string | null>(null)
    const [updateModal, setUpdateModal] = useState(null)
    const [stickyClass, setStickyClass] = useState("0");
    const pathname = usePathname();
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

    const menuItems: React.JSX.Element = <div className='flex'>
        <li className='mx-1'>
            <Link href='/'
                className={`bg-transparent text-purple-500 font-bold border-0 rounded-none mx-1 sm:mx-3' : 'px-1 rounded-none mx-1 sm:mx-3 text-white`
                }
            >
                <div className='sm:flex justify-center sm:items-center'>
                    <div className='font-bold fontSize text-[18px] sm:hidden flex justify-center'>
                        {(pathname === "/") ? <AiFillHome size={'20px'} /> : <AiOutlineHome size={'20px'} />}
                    </div>
                    <span className='ml-1 mt-0 sm:block hidden hide-p font-all sm:text-[18px] text-xs'>হোম</span>
                </div>
            </Link>
        </li>
        <li className='mx-1'>
            <Link href='/abut'
                className={`bg-transparent text-purple-500 font-bold border-0 rounded-none mx-1 sm:mx-3' : 'px-1 rounded-none mx-1 sm:mx-3 text-white`
                }
            >
                <div className='sm:flex justify-center sm:items-center'>
                    <div className='font-bold fontSize text-[18px] sm:hidden flex justify-center'><BiMessageSquareDetail /></div>
                    <span className='ml-1 mt-0 sm:block hidden font-all hide-p sm:text-[18px] text-xs'>এবাউট </span>
                </div>
            </Link>
        </li>
        <li className='mx-1'>
            <Link href='/blog'
                className={`bg-transparent text-purple-500 font-bold border-0 rounded-none mx-1 sm:mx-3' : 'px-1 rounded-none mx-1 sm:mx-3 text-white`
                }
            >
                <div className='sm:flex justify-center sm:items-center'>
                    <div className='font-bold fontSize text-[18px] sm:hidden flex justify-center'><FaBlogger /></div>
                    <span className='ml-1 mt-0 sm:block font-all hidden hide-p sm:text-[18px] text-xs'>ব্লগ</span>
                </div>
            </Link>
        </li>
    </div>

    const ProfileItems = <>
        <li className='pl-2 ml-0 list-none'>
            {
                usertoken ?
                    (<div className="dropdown p-0 dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle online avatar">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">

                                {!me?.imageURL &&
                                    <div className='w-full'>
                                        <UserProfileImg me={me} className='w-10 h-10 bg-primary' />
                                    </div>
                                }
                            </div>
                        </label>
                        <ul tabIndex={0} className="p-2 py-3 shadow-md border text-cyan-800 relative bg-[#fafbfbbc] border-[#9dbcd5a1] top-[60px] menu menu-compact dropdown-content bg-base-100 rounded-box w-48">
                            <li className="text-center border-b-2 border-blue-200 mb-3">
                                <div className="avatar online">
                                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        {me &&
                                            <div className='w-full'>
                                                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center ring ring-[#91f2dc] ring-offset-base-100 ring-offset-2">
                                                    <h2 className='text-3xl uppercase font-bold '>{me?.firstName?.slice(0, 1)}{me?.lastName?.slice(0, 1)}</h2>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <h1 className='text-xl py-1 text-blue-900'>{me?.firstName} {me?.lastName}</h1>
                            </li>

                            <li className='font-bold'>
                                <Link href='/dashboard/'
                                    className={`border-r-[4px] border-primary rounded-l-md text-[#156c65] bg-[#d6f8f5]' : 'hover:bg-[#d6f8f5]`
                                    }
                                >
                                    <MdOutlineDashboardCustomize size={'20px'} />
                                    <h1 className={`origin-left whitespace-nowrap duration-300 font-medium`}>Dashboard</h1>
                                </Link>
                            </li>
                            <li className='font-bold'>
                                <Link href='/dashboard/'
                                    className={`border-r-[4px] border-primary rounded-l-md text-[#156c65] bg-[#d6f8f5]' : 'hover:bg-[#d6f8f5]`
                                    }
                                >
                                    <MdOutlineDashboardCustomize size={'20px'} />
                                    <h1 className={`origin-left whitespace-nowrap duration-300 font-medium`}>Dashboard</h1>
                                </Link>
                            </li>
                            <label onClick={() => setLogout("logout")} htmlFor="Logout-modal" className='pl-4 hover:text-accent flex items-center gap-2 cursor-pointer'><HiOutlineLogout size={'20px'} /> Sign Out</label>
                        </ul>
                    </div>)
                    :
                    (<li className='mx-1'>
                        <Link href='/login' >
                            <div className='sm:flex justify-center sm:items-center'>
                                <span className='ml-1 mt-0 block  sm:text-[18px] text-sm'>Login</span>
                            </div>
                        </Link>
                    </li>)
            }
        </li>
    </>
    return (
        <div className={` ${stickyClass} border-b border-cyan-800 element-font-4 duration-300 z-50 font-bold bg-purple-700 !text-cyan-900 w-full`}>
            <div className="navbar px-xl max-w-7xl flex items-center justify-between mx-auto bg-white">
                <div className="cursor-pointer">
                    <h1 className='text-xl ml-1 uppercase font-bold'>Madrasa</h1>
                </div>
                <div className="">
                    <div className="flex">
                        <ul className="menu bg-slate-400 menu-horizontal font-bold p-0">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                <div>
                    {ProfileItems}
                </div>
            </div>
            {
                logout && <LogOutModule
                    logout={logout}
                    setLogout={setLogout}
                />
            }
        </div>
    );
};

export default NavbarPrimary;
