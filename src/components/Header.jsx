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
                <div className="h-[90vh] lg:h-0 flex justify-center" onClick={handleClick}>
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
        <div className="w-full bg-darkBg relative">
            <div className="w-[100%] lg:w-[80%] m-auto flex justify-between items-center bg-darkB py-5 lg:px-0 relative">
                <div className="text-3xl">
                    <h1 className="flex text-textColor font-extrabold">
                        247 <MdOutlineCurrencyExchange /> xchange{' '}
                    </h1>
                </div>
                <BrowserRouter>
                    <div className="h-0 lg:h-[8vh] flex items-center">
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
                <div className="w-full block lg:flex text-xl absolute left-0 top-[80px] rounded-lg bg-white z-[1000]">
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