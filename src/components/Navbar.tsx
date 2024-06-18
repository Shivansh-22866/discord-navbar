import Link from 'next/link';
import { FaHome, FaSlidersH, FaCompass, FaComments, FaChartBar } from 'react-icons/fa';
import { IoSettings } from "react-icons/io5";
import NavbarIcon from './NavbarIcon';

interface NavbarProps {
  id: string;
}

const links = [
  { href: '/', icon: <FaHome />, text: 'Home 🏠' },
  { href: '/dashboard', icon: <FaSlidersH />, text: 'Dashboard 📊' },
  { href: '/discover', icon: <FaCompass />, text: 'Discover 🔍' },
  { href: '/chats', icon: <FaComments />, text: 'Chats 💬' },
  { href: '/reports', icon: <FaChartBar />, text: 'Reports 📈' },
];

export default function Navbar({ id }: NavbarProps) {
  if (!id) {
    return null;
  }

  return (
    <nav className="">
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
      </div>
    </nav>
  );
}
