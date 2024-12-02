import {
  CloseBarDiv,
  MobilePrimaryMenu,
  MobilePrimaryMenuDiv,
  SmallDeviceMenuBar,
} from "./style";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleNavbar } from "../../store/store";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import MobileNavItems from "./MobileNavItems";
function MobileNavbar() {
  const dispatch = useDispatch();
  const NavItems = [
    { to: "", name: "Home", Icon: FaHome },
    { to: "about_me", name: "About", Icon: IoPersonSharp },
    { to: "works/web", name: "Work", Icon: FaSuitcase },
    { to: "contact", name: "Contact", Icon: MdEmail },
    { to: "blogs", name: "Blog", Icon: FaPen },
  ];

  const handleToggle = () => {
    dispatch(toggleNavbar());
  };
  return (
    <SmallDeviceMenuBar>
      <CloseBarDiv
        onClick={() => {
          handleToggle();
        }}
      >
        <IoIosCloseCircle />
      </CloseBarDiv>

      <MobilePrimaryMenuDiv>
        <MobilePrimaryMenu>
          {NavItems.map((item, index) => (
            <MobileNavItems
              key={index}
              to={item.to}
              name={item.name}
              Icon={item.Icon}
            />
          ))}
        </MobilePrimaryMenu>
      </MobilePrimaryMenuDiv>
    </SmallDeviceMenuBar>
  );
}

export default MobileNavbar;
