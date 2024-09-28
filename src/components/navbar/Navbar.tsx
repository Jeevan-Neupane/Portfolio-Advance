import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { MenuHeader, PrimaryMenu } from "./style";
import Navitems from "./Navitems";

const Navbar = () => {
  const NavItems = [
    { to: "home", name: "Home", Icon: FaHome },
    { to: "about", name: "About", Icon: IoPersonSharp },
    { to: "work", name: "Work", Icon: FaSuitcase },
    { to: "contact", name: "Contact", Icon: MdEmail },
    { to: "blog", name: "Blog", Icon: FaPen },
  ];
  return (
    <MenuHeader>
      <PrimaryMenu>
        {NavItems.map((item, index) => (
          <Navitems
            key={index}
            to={item.to}
            name={item.name}
            Icon={item.Icon}
          />
        ))}
      </PrimaryMenu>
    </MenuHeader>
  );
};

export default Navbar;
