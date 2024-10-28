import React, { ReactNode } from 'react';
import NavBar from '../organisms/NavBar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <NavBar label='Tree Learning' />
      <main className="flex-grow p-4 pt-0">{children}</main>
    </div>
  );
};

export default MainLayout;