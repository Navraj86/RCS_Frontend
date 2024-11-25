import { useState, useEffect } from "react";
import { IoNotificationsOutline , IoLogOutOutline } from "react-icons/io5";
import { Tooltip } from '@chakra-ui/react';
// import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

  return (
    <header className={`${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } sticky top-0 transform transition-transform duration-300 flex items-center justify-between bg-primary h-16 px-10 shadow-lg z-50`}>
        <div className="flex">
            <Link to="/">
               { /*<img src={Logo} alt="Logo" className="w-10 h-12" />*/}
            </Link>
            <div className="ml-4 cursor-default">
                <p className="text-white font-medium">ਬਠਿੰਡਾ</p>
                <p className="text-white font-medium">BATHINDA</p>
            </div>
        </div>

        <nav className="flex items-center">
            <Link to="/" className="navstyle mx-4">Home</Link>
            <Link to="/bidding" className="navstyle mx-4">Bidding</Link>
            <Link to="/users" className="navstyle mx-4">Users</Link>
            <Link to="/properties" className="navstyle ml-4 mr-5">Properties</Link>
            <Tooltip hasArrow label='Notifications' bg='gray.500' color='white'>
                <button className="group p-2 mr-3 rounded-full hover:bg-white transition-all">
                    <IoNotificationsOutline  size={20} className="text-white group-hover:text-primary" />
                </button>
            </Tooltip>
            <Tooltip hasArrow label='Logout' bg='gray.500' color='white'>
                <button className="group p-2 rounded-full hover:bg-white transition-all">
                    <IoLogOutOutline size={20} className="text-white group-hover:text-primary transition-colors" />
                </button>
            </Tooltip>
        </nav>
    </header>
  );
};

export default Navbar;
