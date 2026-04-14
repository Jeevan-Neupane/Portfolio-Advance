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
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function MobileNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const NavItems = useMemo(
    () => [
      { to: "/#home", hash: "#home", name: "Home", Icon: FaHome },
      { to: "/#about", hash: "#about", name: "About", Icon: IoPersonSharp },
      { to: "/#works", hash: "#works", name: "Work", Icon: FaSuitcase },
      { to: "/#blogs", hash: "#blogs", name: "Blog", Icon: FaPen },
      { to: "/#contact", hash: "#contact", name: "Contact", Icon: MdEmail },
    ],
    []
  );
  const [activeHash, setActiveHash] = useState<string>("#home");

  useEffect(() => {
    const detectActiveSection = () => {
      const triggerPoint = window.scrollY + 160;
      let current = "#home";

      for (const item of NavItems) {
        const sectionId = item.hash.replace("#", "");
        const section = document.getElementById(sectionId);

        if (!section) {
          continue;
        }

        if (triggerPoint >= section.offsetTop) {
          current = item.hash;
        }
      }

      setActiveHash(current);
    };

    detectActiveSection();
    window.addEventListener("scroll", detectActiveSection, { passive: true });
    window.addEventListener("resize", detectActiveSection);

    return () => {
      window.removeEventListener("scroll", detectActiveSection);
      window.removeEventListener("resize", detectActiveSection);
    };
  }, [NavItems]);

  const handleToggle = () => {
    dispatch(toggleNavbar());
  };

  const handleNavigate = (to: string) => {
    const hash = to.includes("#") ? to.slice(to.indexOf("#")) : "#home";
    const sectionId = hash.replace("#", "");
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `/${hash}`);
      setActiveHash(hash);
    } else {
      navigate(`/${hash}`);
      setActiveHash(hash);
    }

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
              isActive={activeHash === item.hash}
              onNavigate={handleNavigate}
            />
          ))}
        </MobilePrimaryMenu>
      </MobilePrimaryMenuDiv>
    </SmallDeviceMenuBar>
  );
}

export default MobileNavbar;
