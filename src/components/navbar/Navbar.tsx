import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { MenuHeader, PrimaryMenu } from "./style";
import Navitems from "./Navitems";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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

  const handleNavigate = (to: string) => {
    const hash = to.includes("#") ? to.slice(to.indexOf("#")) : "#home";
    const sectionId = hash.replace("#", "");
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `/${hash}`);
      setActiveHash(hash);
      return;
    }

    navigate(`/${hash}`);
    setActiveHash(hash);
  };

  return (
    <MenuHeader>
      <PrimaryMenu>
        {NavItems.map((item, index) => (
          <Navitems
            key={index}
            to={item.to}
            name={item.name}
            Icon={item.Icon}
            isActive={activeHash === item.hash}
            onNavigate={handleNavigate}
          />
        ))}
      </PrimaryMenu>
    </MenuHeader>
  );
};

export default Navbar;
