import { FaHome, FaRegUserCircle, FaBookReader  } from 'react-icons/fa'
import { BiSolidContact } from "react-icons/bi";
import { FaPersonCircleQuestion } from 'react-icons/fa6'

const data = [
    {
        id: 'home',
        path: '/',
        value: 'Home',
        icon: <FaHome />
    },
    {
        id: 'about',
        path: '/about',
        value: 'About',
        icon: <FaRegUserCircle />
    },
    {
        id: 'services',
        path: '/services',
        value: 'Services',
        icon: <FaBookReader />
    },
    {
        id: 'contact',
        path: '/contact',
        value: 'Contact',
        icon: <BiSolidContact />
    },
    {
        id: 'faq',
        path: '/faq',
        value: 'FAQ',
        icon: <FaPersonCircleQuestion />
    }
]

export default data
