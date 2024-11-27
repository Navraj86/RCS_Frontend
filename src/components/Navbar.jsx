import { useState, useEffect } from "react";
import { IoNotificationsOutline, IoLogOutOutline } from "react-icons/io5";
import {
  Tooltip,
  Button,
  useToast,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import Notifications from "./Notification";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const toast = useToast();

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
    <header
      className={`${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } sticky top-0 transform transition-transform duration-300 flex items-center justify-between bg-primary h-16 px-10 shadow-lg z-50`}
    >
      <div className="flex">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-10 h-12" />
        </Link>
        <div className="ml-4 cursor-default">
          <p className="text-white font-medium">ਬਠਿੰਡਾ</p>
          <p className="text-white font-medium">BATHINDA</p>
        </div>
      </div>

      <nav className="flex items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `navstyle mx-4 ${isActive ? "after:scale-x-100" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/bidding"
          className={({ isActive }) =>
            `navstyle mx-4 ${isActive ? "after:scale-x-100" : ""}`
          }
        >
          Bidding
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `navstyle mx-4 ${isActive ? "after:scale-x-100" : ""}`
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/properties"
          className={({ isActive }) =>
            `navstyle ml-4 mr-5 ${isActive ? "after:scale-x-100" : ""}`
          }
        >
          Properties
        </NavLink>
        <Popover>
          <PopoverTrigger>
            <Button mr={2}>
              <IoNotificationsOutline size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent bg="white" boxShadow="dark-lg">
            <PopoverArrow bg="white" />
            <PopoverHeader>Notifications</PopoverHeader>
            <PopoverBody>
              <Notifications />
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Tooltip hasArrow label="Logout" bg="gray.500" color="white">
          <Button
            onClick={() =>
              toast({
                title: "Logout Done!",
                position: "bottom-right",
                status: "error",
                isClosable: true,
              })
            }
          >
            <IoLogOutOutline size={20} />
          </Button>
        </Tooltip>
      </nav>
    </header>
  );
};

export default Navbar;
