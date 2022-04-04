import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='list-none flex justify-center test-center bg-slate-400'>
                <ul className='flex'>
                    <li className='p-5'>
                        <Link to='/home'>HOME</Link>
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
            </nav>
        </div>
    );
};

export default Header;