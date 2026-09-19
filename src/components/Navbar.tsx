import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between bg-black-100'>
                <img src="" alt="" />
                <ul>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div>
                    <button>Sign in</button>
                    <button>Sign up</button>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;