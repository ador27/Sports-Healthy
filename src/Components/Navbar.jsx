import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl"><span className='bg-blue-600 text-white p-1 rounded mr-1'>Gym</span> baran</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Program</a></li>
                        <li><a>Blog</a></li>
                        <li><a>About us</a></li>
                        <button className="btn btn-active btn-primary">Log in</button>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;