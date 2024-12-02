import { Outlet } from "react-router-dom";
import { MainDiv } from "../styles/Container";
import Navbar from "../components/navbar/Navbar";
import { MenuBarIcon } from "./style";
import { MdOutlineMenu } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { closeNavbar, toggleNavbar } from "../store/store";
import MobileNavbar from "../components/navbar/MobileNavbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { isOpen } = useSelector((state: any) => state.navbar);

  const handleToggle = () => {
    dispatch(toggleNavbar());
  };
  useEffect(() => {
    dispatch(closeNavbar());
  }, [location]);

  return (
    <MainDiv>
      <MenuBarIcon
        onClick={() => {
          console.log("clicked");
          handleToggle();
        }}
        isOpen={isOpen}
      >
        <MdOutlineMenu />
      </MenuBarIcon>
      {isOpen && <MobileNavbar />}
      <Navbar />
      <Outlet />
    </MainDiv>
  );
};

export default Layout;
