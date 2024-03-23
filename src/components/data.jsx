import { FaHome, FaRegUserCircle, FaBookReader  } from 'react-icons/fa'
import { BiSolidContact } from "react-icons/bi";
import { FaPersonCircleQuestion } from 'react-icons/fa6'
import btc from '../images/btc-logo.png';
import bnb from '../images/bnb-logo.png';
import ltc from '../images/litecoin.png';
import dgc from '../images/dogecoin-logo.png';
import eth from '../images/eth-logo.png';

export const data = [
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

export const cryptos = [
    {
        id: 'btc',
        value: 'Bitcoin',
        img: btc,
        price: '$000'
    },
    {
        id: 'eth',
        value: 'Ethereum',
        img: eth,
        price: '$000'
    },
    {
        id: 'bnb',
        value: 'Binace',
        img: bnb,
        price: '$000'
    },
    {
        id: 'ltc',
        value: 'Litecoin',
        img: ltc,
        price: '$000'
    },
    {
        id: 'dgc',
        value: 'Dogecoin',
        img: dgc,
        price: '$000'
    }
]

