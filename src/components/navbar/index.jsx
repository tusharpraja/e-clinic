"use client";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io"
import { useTheme } from "next-themes";
import {FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitch = () =>{
    const { theme, setTheme } = useTheme()
    return(
        <div>
            {
                theme === "light" ?
                    <FaSun className={"text-black dark:text-white"} onClick={()=>{setTheme("dark")}}/>
                    :
                    <FaMoon className={"text-black dark:text-white"} onClick={()=>{setTheme("light")}}/>
            }
        </div>
    )
}

const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false)

    const links = [
        {
            name:"home",
            link:"/"
        },
        {
            name:"patient",
            link:"/patients"
        },
        {
            name:"services",
            link:"/service"
        },
        {
            name:"doctors",
            link:"/doctors"
        },
        {
            name:"contact",
            link:"/appointment"
        }
    ]


    return (
        <>
        <nav className="sticky top-0 w-full bg-white shadow dark:bg-gray-800 z-50">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center text-black justify-between">
                        <a href="#">
                            <span className={"text-xl font-bold"}>E-Clinic</span>
                        </a>

                        <div className="flex flex-row items-center justify-center gap-2 lg:hidden">
                            <div className="flex items-center lg:mt-0">
                                {/*<ThemeSwitch/>*/}
                                <a href={'/appointment'} className={'bg-blue-500 px-3 py-2 text-white rounded-lg'}>
                                    Take a Appointment
                                </a>
                            </div>
                            <button type="button"
                                    className="text-gray-500 dark:text-gray-200
                            hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600
                            dark:focus:text-gray-400 text-4xl"
                                    onClick={()=>{setIsOpen((prevState)=> !prevState )}}
                            >
                            {/* Ternary Statement */}
                            {/*   condition ? true-statement : false-statement */}
                            {
                                isOpen ?
                                    <IoMdClose onClick={()=>{setIsOpen(true)}}/>
                                    :
                                    <IoMdMenu onClick={()=>{setIsOpen(false)}}/>
                            }
                        </button>
                    </div>
                </div>

                <div className={`${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} absolute
                    inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800
                    lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex
                    lg:items-center`}>
                <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                    {
                        links.map((link,index)=>{
                            return(
                                <a href={link.link} key={index}
                                   className="capitalize px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    {link.name}
                                </a>
                                )
                        })
                    }
                </div>

                <div className="flex items-center mt-4 lg:mt-0">
                    {/*<ThemeSwitch/>*/}
                    <a href={'/appointment'} className={'hidden lg:block bg-blue-500 px-3 py-2 text-white rounded-lg'}>
                        Take a Appointment
                    </a>
                </div>
            </div>
        </div>
        </div>
</nav>
</>
)
}

export default Navbar;