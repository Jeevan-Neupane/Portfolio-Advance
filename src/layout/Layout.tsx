import { Outlet } from "react-router-dom";
import { MainDiv } from "../styles/Container";
import Navbar from "../components/navbar/Navbar";

const Layout = () => {
  return (
    <MainDiv>
      <Navbar />
      <Outlet />
    </MainDiv>
  );
};

export default Layout;
