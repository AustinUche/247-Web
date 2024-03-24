import React from 'react'
import home from '../images/bg.png'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link"

const Hero = () => {
    return (
        <section className="w-full lg:w-full m-auto bg-darkBg" id="home">
            <div className="w-[90%] lg:w-[80%] m-auto flex flex-col-reverse lg:flex-row items-center py-14 lg:py-[100px] bg-darkBg">
                <div className="w-full lg:w-[50%] mr-0 lg:mr-[5%] flex flex-col gap-4">
                    <h1 className="w-full max-w-full lg:max-w-full  text-3xl lg:text-5xl text-textColor  text-center lg:text-left font-extrabold leading-8">
                        The world's <span className="text-lightBlue">leading</span> decentralized digital exchange.
                    </h1>
                    <p className="text-center lg:text-left text-textColor max-w-fit">
                        247exchange platform is the premier digital currency exchange made best to meet your everyday
                        crypto transactions.
                    </p>
                    <BrowserRouter>
                        <Link
                            to="https://wa.me/+2348107337549"
                            href=""
                            className="w-[50%] lg:w-[30%] m-auto lg:m-0 text-center lg:text-center border-solid bg-transparent border-darkBlue border-[2px] bg-lightBtn no-underline text-[#fff] py-2 text-lg relative transition-all duration-1000 hover:before:duration-1000 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-darkBlue before:translate-x-[100%] before:opacity-0 hover:before:translate-x-0 hover:before:opacity-[1] hover:before:z-[-1] z-[100]"
                        >
                            Exchange
                        </Link>
                    </BrowserRouter>
                </div>
                <div class="w-full lg:w-[50%] flex justify-center">
                    <img src={home} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero
