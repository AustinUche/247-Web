import React from 'react'
import about from "../images/about-img.png"

const About = () => {
  return (
      <section className="w-full lg:w-full m-auto bg-gradient-to-b from-grayWhite to-textColor" id="about">
          <div className="w-[90%] lg:w-[80%] m-auto flex flex-col-reverse lg:flex-row items-center py-10 gap-10">
              <div className="w-full lg:w-[50%] mr-0 lg:mr-[5%] flex flex-col gap-4">
                  <h1 className="w-full max-w-full lg:max-w-full  text-3xl lg:text-5xl text-slate-950  text-center lg:text-left font-extrabold leading-8">
                      About 247exchange
                  </h1>
                  <p className="text-center lg:text-left text-slate-950 max-w-fit">
                      247exchange is a cryptocurrency exchange company that deals on buying and selling of all kinds of cryptocurrencies. As a customer who is looking to carryout whether small, medium or large cryptocurrency deals, 247exchange is the best at delivering these services and more at good rates backed-up with swift transaction.
                  </p>
              </div>
              <div class="w-full lg:w-[50%]">
                  <img src={about} alt="" />
              </div>
          </div>
      </section>
  )
}

export default About