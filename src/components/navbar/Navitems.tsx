import { MenuItem, MenuLink, MenuName } from "./style";
import { ElementType } from "react";

type NavProps = {
  to: string;
  name: string;
  Icon: ElementType;
  isActive: boolean;
  onNavigate: (to: string) => void;
};

const Navitems = ({ to, name, Icon, isActive, onNavigate }: NavProps) => {
  return (
    <MenuItem>
      <MenuLink
        to={to}
        $isActive={isActive}
        onClick={(event) => {
          event.preventDefault();
          onNavigate(to);
        }}
      >
        <MenuName>{name}</MenuName>
        <Icon />
      </MenuLink>
    </MenuItem>
  );
};

export default Navitems;
