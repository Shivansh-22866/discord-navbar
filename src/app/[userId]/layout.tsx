// src/app/layout.tsx
import React from 'react';
import Navbar from '../../components/Navbar';
import '../globals.css';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    userId?: string;
  };
}

const Layout: React.FC<LayoutProps> = ({ children, params }) => {
  const showNavbar = !!params.userId;
  const id = params.userId!;

  return (
    <html lang="en">
      <head>
        <title>Frover</title>
      </head>
      <body>
        {showNavbar && <Navbar id={id}/>}
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
