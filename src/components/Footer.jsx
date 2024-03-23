import React from 'react'
import { MdOutlineCurrencyExchange } from 'react-icons/md'

const Footer = () => {
  return (
      <section className="w-full lg:w-full m-auto bg-darkBg">
          <div className="w-[90%] lg:w-[80%] m-auto flex lg:flex-row justify-around items-center py-1 text-textColor bg-darkBg">
              <div>©Copyright 2024 247exchange. All rights reserved.</div>
              <div className='flex text-3xl font-extrabold'>247<MdOutlineCurrencyExchange />xchange</div>
          </div>
      </section>
  )
}

export default Footer