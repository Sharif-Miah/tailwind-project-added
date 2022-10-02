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
        <div>

            {
                open ? <Bars3Icon className='w-6 h-6' onClick={() => setOpen(!open)} /> : <XMarkIcon className='w-6 h-6' onClick={() => setOpen(!open)} />
            }



            <div className='md:flex justify-center'>
                {
                    routes.map(route => <Links key={route.id} route={route} />)
                }
            </div>
            <h1 className='text-4xl font-bold underline '>Navbar in Tailwind Css</h1>
            <h1 className='text-3xl underline'>This is another tag</h1>
        </div>
    );
};

export default Navbar;