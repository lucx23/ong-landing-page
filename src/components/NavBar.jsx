import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Sobre', href: '#sobre' },
        { name: 'Doar', href: '#doar' },
        {name: 'Depoimentos', href: '#depoimentos'}
    ]
    return (
    <>
        <header
            animation={{ y: [-100, 0] }}
            className='md:fixed right-0 left-0 z-40 flex items-center justify-between md:justify-around p-3 bg-gray-700' id='inicio'>
            <h1 className='font-bold text-sky-400 text-3xl'><a href="#">ONG Site</a></h1>
            <div>
                <button onClick={() => setIsOpen(!isOpen)} className='sm:hidden cursor-pointer'>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className='text-white' />
                </button>

                {/* Menu Computador */}
                <nav className='hidden sm:flex'>
                    <motion.ul
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='flex space-x-4 text-lg transition-all'>
                        {links.map(link => (
                            <motion.li key={link.name}
                                className='hover:bg-linear-to-br from-blue-500 to-purple-400 font-semibold hover:scale-115 hover:shadow-lg text-white transition-all duration-400 p-2 hover:rotate-1
                            rounded-3xl'><a href={link.href}>{link.name}</a></motion.li>
                        ))}
                    </motion.ul>
                </nav>

            </div>

        </header>
                {/* Menu Mobile */}
                {isOpen && (
                    <motion.nav
                        initial={{ y: -300 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='sm:hidden h-full p-2 bg-gray-700 shadow-lg z-50 flex flex-col items-center text-center'>
                        <ul className='text-xl'>
                            {links.map(link => (
                                <li key={link.name} className='text-white font-semibold hover:underline p-2'>
                                    <a href={link.href}>{link.name}</a>
                                    {/* <hr /> */}
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
        </>
    )
}

export default NavBar
