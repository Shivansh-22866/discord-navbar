import Link from 'next/link';
import { FaHome, FaSlidersH, FaCompass, FaComments, FaChartBar } from 'react-icons/fa';
import { IoSettings } from "react-icons/io5";
import NavbarIcon from './NavbarIcon';
import { ReactNode } from 'react';

interface NavbarProps {
  id: string;
  links: {
    href: string;
    icon: React.ReactNode;
    text: string;
  }[];
  footer: React.ReactNode;
}

export default function Navbar({ id, links, footer}: NavbarProps) {
  if (!id) {
    return null;
  }

  return (
    <div className="">
      <div className="fixed top-0 left-0 h-screen w-16 flex flex-col justify-between bg-[#202225]">
        <ul className="">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={`/${id}${link.href}`}>
                  <NavbarIcon icon={link.icon} text={link.text} />
              </Link>
            </li>
          ))}
        </ul>
        <div>
          {footer}
        </div>
      </div>
    </div>
  );
}
