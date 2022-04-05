import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='list-none  bg-slate-400'>
                <div className='w-4/5 flex justify-between items-center mx-auto'>
                    <h2 className='text-2xl font-medium'>
                        <Link to='/'>Laptop Bazar</Link>
                    </h2>
                    <ul className='flex'>
                        <li className='p-5'>
                            <Link to='/'>HOME</Link>
                        </li>
                        <li className='p-5'>
                            <Link to='/reviews'>REVIEWS</Link>
                        </li>
                        <li className='p-5'>
                            <Link to='/dashboard'>DASHBOARD</Link>
                        </li>
                        <li className='p-5'>
                            <Link to='/blogs'>BLOGS</Link>
                        </li>
                        <li className='p-5'>
                            <Link to='/about'>ABOUT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;