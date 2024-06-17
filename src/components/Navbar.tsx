import Link from 'next/link';
import { FaHome, FaSlidersH } from 'react-icons/fa';
import { IoSettings } from "react-icons/io5";
import NavbarIcon from './NavbarIcon';

interface NavbarProps {
  id: string;
}

export default function Navbar({ id }: NavbarProps) {
  if (!id) {
    return null;
  }

  return (
    <nav className="">
      <div className="fixed top-0 left-0 h-screen w-16 flex flex-col justify-between bg-[#202225]">
        <ul className="">
          <li>
            <Link href={`/home/${id}`}>
              <NavbarIcon icon = {<FaHome/>} text="Home 🏠"/>
            </Link>
          </li>
          <li>
            <Link href={`/home/${id}/dashboard`}>
              <NavbarIcon icon = {<FaSlidersH/>} text="Dashboard 📊"/>
            </Link>
          </li>
          <li>
            <Link href={`/home/${id}/settings`}>
              <NavbarIcon icon = {<IoSettings/>} text="Settings 💡"/>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}