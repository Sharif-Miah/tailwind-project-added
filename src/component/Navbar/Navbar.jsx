import React from 'react';
import Links from '../Links/Links';

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Product', path: '/product' },
        { id: 4, name: 'Service', path: '/services' },
        { id: 5, name: 'Contact', path: '/contact' },
    ]
    return (
        <div>
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