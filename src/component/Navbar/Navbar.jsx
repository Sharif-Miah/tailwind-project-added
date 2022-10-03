import React, { useState } from 'react';
import Links from '../Links/Links';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Product', path: '/product' },
        { id: 4, name: 'Service', path: '/services' },
        { id: 5, name: 'Contact', path: '/contact' },
    ]
    return (
        <nav className='bg-purple-200 w-full'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden cursor-pointer '>
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>

            <div>
                <ul className={` md:flex justify-center  absolute md:static  duration-500 ease-in w-full bg-purple-200 ${open ? 'top-6px' : 'top-[-180px]'}`}>
                    {
                        routes.map(route => <Links key={route.id} route={route} />)
                    }
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;