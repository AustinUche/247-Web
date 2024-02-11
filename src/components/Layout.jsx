import React from 'react'
import Sidebar from './Sidebar'
import Crypto from './Crypto'
import Home from './Home'

const Layout = () => {
  return (
      <div className="flex flex-row justify-between w-screen h-screen bg-slate-900">
          <Sidebar />
          <Crypto />
          <Home />
      </div>
  )
}

export default Layout