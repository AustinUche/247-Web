import React from 'react'
import { MdOutlineCurrencyExchange } from 'react-icons/md'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { useState } from 'react'

const Header = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }

    const content = (
        <>
            <BrowserRouter>
                <div
                    className="h-[50vh lg:h- none lg:flex justify-center fixed lg:relative top-[80px] lg:top-0 left-[15px] lg:left-0 right-[15px] lg:right-0 bottom-[15px] lg:bottom-0 bg-textColor rounded-lg"
                    onClick={handleClick}
                >
                    <ul className="flex flex-col gap-5 text-center py-10 lg:flex">
                        <li>
                            <Link to="#home" className="text-darkBg lg:text-textColor">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="#about" className="text-darkBg">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="#services" className="text-darkBg">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="#contact" className="text-darkBg">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </BrowserRouter>
        </>
    )

    return (
        <div className="w-full bg-darkBg fixed top-0 left-0 right-0 z-[1000]">
            <div className="w-[100%] lg:w-[80%] m-auto flex justify-between items-center py-5 lg:py-1 px-5 lg:px-0 relative">
                <div className="text-3xl">
                    <h1 className="flex text-textColor font-extrabold">
                        247 <MdOutlineCurrencyExchange /> xchange{' '}
                    </h1>
                </div>
                <BrowserRouter>
                    <div className="h-0 lg:h-[8vh] hidden lg:flex items-center">
                        <ul className="block lg:flex gap-5">
                            <li>
                                <Link to="#home" className="text-darkBg lg:text-textColor">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="#about" className="text-darkBg lg:text-textColor">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="#services" className="text-darkBg lg:text-textColor">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="#contact" className="text-darkBg lg:text-textColor">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </BrowserRouter>
                <div className="w-ful block lg:hidden text-xl bg-white z-[1000]">
                    {click && content}
                </div>
                <div
                    className="text-3xl block lg:hidden text-textColor cursor-pointer transition-all duration-1000"
                    onClick={handleClick}
                >
                    {click ? <IoMdClose /> : <IoMdMenu />}
                </div>
            </div>
        </div>
    )
}

export default Header
