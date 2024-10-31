import React from 'react';
import { Link } from 'react-router-dom';

interface NavBarProps {
  label: string
}

const NavBar: React.FC<NavBarProps> = ({ label }) => {
  return (
    <nav className="flex flex-col justify-center items-center p-4 bg-black text-white m-4 mb-0">
      <div className="text-3xl font-bold">{ label }</div>
      <ul className='flex bg-blue-500 text-start w-10/12 p-2 my-5 mb-2'>
        <li><Link to="/" className='mr-2 transition duration-225 ease-in-out hover:text-sky-300 hover:underline'>Home</Link></li>
        <li><Link to="/modules" className='mr-2 transition duration-225 ease-in-out hover:text-sky-300 hover:underline'>Modules</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;