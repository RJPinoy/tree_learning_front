import React from 'react';

interface NavBarProps {
  label: string
}

const NavBar: React.FC<NavBarProps> = ({ label }) => {
  return (
    <nav className="flex justify-center items-center p-4 bg-black text-white m-4 mb-0">
      <div className="text-3xl font-bold">{ label }</div>
    </nav>
  );
};

export default NavBar;