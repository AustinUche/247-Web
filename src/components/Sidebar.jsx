import React from 'react'
import { MdOutlineCurrencyExchange } from 'react-icons/md'
import data from './data'
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="flex w-1/5 h-screen bg-slate-950">
            <div className="flex flex-wrap w-1/5 py-4 px-4 relatvie">
                <h1 className="text-3xl text-slate-100 flex font-extrabold">
                    247
                    <MdOutlineCurrencyExchange />
                    change
                </h1>
                <div className="flex flex-col text-slate-100 relative text-center  bottom-8 ">
                    {data.map((links) => (
                        <SidebarLink key={links.id} links={links} />
                    ))}
                </div>
                <div>
                    {<Outlet />}
                </div>
            </div>
        </div>
    )
}

function SidebarLink({ links }) {
    return (
        <Link to={links.path}>
            <p
                key={links.id}
                className="flex text-xl bg-slate-600 my-8 py-4 px-16 rounded-lg text-center cursor-pointer items-center gap-1"
            >
                {links.icon} {links.value}
            </p>
        </Link>
    )
}
export default Sidebar
