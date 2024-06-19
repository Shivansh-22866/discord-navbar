// src/app/layout.tsx
import React from 'react';
import Navbar from '../../components/Navbar';
import '../globals.css';
import { FaChartBar, FaComments, FaCompass, FaHome, FaSlidersH } from 'react-icons/fa';
import Image from "next/image";
import Footer from '@/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    userId?: string;
  };
}

const links = [
  { href: '/', icon: <FaHome />, text: 'Home 🏠' },
  { href: '/dashboard', icon: <FaSlidersH />, text: 'Dashboard 📊' },
  { href: '/discover', icon: <FaCompass />, text: 'Discover 🔍' },
  { href: '/chats', icon: <FaComments />, text: 'Chats 💬' },
  { href: '/reports', icon: <FaChartBar />, text: 'Reports 📈' },
];

const Layout: React.FC<LayoutProps> = ({ children, params }) => {
  const showNavbar = !!params.userId;
  const id = params.userId!;

  return (
    <html lang="en">
      <head>
        <title>Frover</title>
      </head>
      <body>
        {showNavbar && <Navbar id={id} links={links} footer={<Footer/>}></Navbar>}
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
