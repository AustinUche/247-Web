import React from 'react'
import s from "../images/s.png"
import { MdOutlineWhatsapp } from 'react-icons/md'
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const Contact = () => {
  return (
      <section className="w-full lg:w-full m-auto bg-gradient-to-b from-grayWhite to-textColor" id="contact">
          <div className="w-[90%] lg:w-[80%] m-auto flex flex-col-reverse lg:flex-row items-center py-10 gap-10">
              <div className="w-full lg:w-[50%] mr-0 lg:mr-[5%] flex flex-col gap-4">
                  <h1 className="w-full max-w-full lg:max-w-full  text-3xl lg:text-5xl text-slate-950  text-center lg:text-left font-extrabold leading-8">
                      Contact Us
                  </h1>
                  <p className="text-center lg:text-left text-slate-950 max-w-fit">
                      Have a question or need assistance? Our dedicated support team is here to help. Reach out to us through our social media handles and we'll promptly address your inquiries. Your satisfaction is our utmost priority, so don't hesitate to get in touch. We're committed to providing you with the best possible experience on our crypto buying and selling platform. 
                  </p>
                  <BrowserRouter>
                      <div className="w-full flex gap-10">
                          <Link to="https://wa.me/+2348107337549" className="flex items-center gap-1">
                              <MdOutlineWhatsapp />
                              WhatsApp
                          </Link>
                          <Link to="https://www.instagram.com/exchange.247?igsh=cDMONWF0ZDQ3bm9x" className="flex items-center gap-1">
                              <FaInstagram />
                              Instagram
                          </Link>
                          <Link className="flex items-center gap-1">
                              <FaXTwitter />
                              Twitter
                          </Link>
                      </div>
                  </BrowserRouter>
              </div>
              <div class="w-full lg:w-[50%]">
                  <img src={s} alt="" />
              </div>
          </div>
      </section>
  )
}

export default Contact