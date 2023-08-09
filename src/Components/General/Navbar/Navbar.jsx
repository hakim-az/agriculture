import { NavLink } from 'react-router-dom'
import Logo from '../../../assets/Icons/logo.png'
import Hamburger from '../../../assets/Icons/hamburger.svg'
import Search from '../../../assets/Icons/search.png'
import Cart from '../../../assets/Icons/cart.png'
import { useState } from 'react'
import './Navbar.css'


const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(true);

    return (
        <nav className='bg-white py-5 fixed top-0 w-full z-20'>
            <div className="box-container flex items-center justify-between flex-wrap">
                {/* logo */}
                <img className='h-10' src={Logo} alt="agriculture-logo" />
                {/* hamburger */}
                <img onClick={() => setActiveMenu(!activeMenu)} className='hamburger w-8 h-8 cursor-pointer hidden max-[820px]:flex' src={Hamburger} alt="hamburger-icon" />
                {/* menu */}
                <ul className={`nav-menu flex gap-4 text-main-green font-bold ${activeMenu ? 'max-[820px]:hidden' : 'max-[820px]:flex'}`}>
                    <li>
                        <NavLink onClick={() => setActiveMenu(true)} to='/' className={({ isActive }) => (isActive ? 'px-2 pb-1 hover:border-b-2 border-green text-green' : 'px-2 pb-1 hover:border-b-2 border-green')}> Home </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setActiveMenu(true)} to='/about' className={({ isActive }) => (isActive ? 'px-2 pb-1 hover:border-b-2 border-green text-green' : 'px-2 pb-1 hover:border-b-2 border-green')}> About </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setActiveMenu(true)} to='/shop' className={({ isActive }) => (isActive ? 'px-2 pb-1 hover:border-b-2 border-green text-green' : 'px-2 pb-1 hover:border-b-2 border-green')}> Shop </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setActiveMenu(true)} to='/services' className={({ isActive }) => (isActive ? 'px-2 pb-1 hover:border-b-2 border-green text-green' : 'px-2 pb-1 hover:border-b-2 border-green')}> Services </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setActiveMenu(true)} to='/blog' className={({ isActive }) => (isActive ? 'px-2 pb-1 hover:border-b-2 border-green text-green' : 'px-2 pb-1 hover:border-b-2 border-green')}> Blog </NavLink>
                    </li>
                </ul>
                {/* actions */}
                <div className={`nav-actions flex items-center justify-evenly max-[820px]:mx-auto flex-wrap gap-5 ${activeMenu ? 'max-[820px]:hidden' : 'max-[820px]:flex'}`}>
                    {/* search */}
                    <div className='flex items-center bg-[#FAFAFA] h-9 rounded-full'>
                        <input className='bg-transparent border-none outline-none px-4' type="text" />
                        <div className='flex items-center justify-center bg-green h-9 w-9 rounded-full'>
                            <img className='w-4 h-4 cursor-pointer'  src={Search} alt="search-icon" />
                        </div>
                    </div>
                    {/* Cart */}
                    <dir className='flex items-center gap-1 border border-[#E0E0E0] rounded-full cursor-pointer'>
                        <div className='flex items-center justify-center bg-main-green h-8 w-8 rounded-full m-1'>
                            <img className='w-4 h-4'  src={Cart} alt="search-icon" />
                        </div>
                        <span className='pr-3 text-main-green font-semibold'>Cart (0)</span>
                    </dir>
                </div>
            </div>
        </nav>
    )
}

export default Navbar