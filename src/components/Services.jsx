import React from 'react'
import service from '../images/s1.png'

const Services = () => {
    return (
        <section className="w-full lg:w-full m-auto bg-gradient-to-b from-grayWhite to-textColor" id="services">
            <div className="w-[90%] lg:w-[80%] m-auto flex flex-col-reverse lg:flex-row-reverse items-center py-10 gap-10">
                <div className="w-full lg:w-[50%] mr-0 lg:mr-[5%] flex flex-col gap-4">
                    <h1 className="w-full max-w-full lg:max-w-full  text-3xl lg:text-5xl text-slate-950  text-center lg:text-left font-extrabold leading-8">
                        Our Services
                    </h1>
                    <p className="text-center lg:text-left text-slate-950 max-w-fit">
                        Welcome to our crypto buying and selling platform, your one-stop destination for seamless
                        transactions in the world of digital assets. With us, you can easily buy, sell and exchange a
                        variety of cryptocurrencies, all with the utmost convenience and security. Our robust wallet
                        services ensure the safety of your funds. Plus, with real-time market data and 24/7 customer support, you'll always stay informed and supported. Join us today and experience the future of finance!
                    </p>
                </div>
                <div class="w-full lg:w-[50%]">
                    <img src={service} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Services