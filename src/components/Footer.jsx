import React from 'react'
import { MdOutlineCurrencyExchange } from 'react-icons/md'

const Footer = () => {
  return (
      <section className="w-full lg:w-full m-auto bg-darkBg">
          <div className="w-full lg:w-[80%] m-auto flex flex-col-reverse lg:flex-row justify-center lg:justify-between gap-2 items-center py-1 text-textColor bg-darkBg">
              <div className="w-full text-center leading-4">©Copyright 2024 247exchange. All rights reserved.</div>
              <div className="w-full text-center justify-center flex text-xl lg:text-3xl font-extrabold">
                  247
                  <MdOutlineCurrencyExchange />
                  xchange
              </div>
          </div>
      </section>
  )
}

export default Footer