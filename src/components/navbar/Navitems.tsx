import { MenuItem, MenuLink, MenuName } from "./style";
import { ElementType } from "react";

type NavProps = {
  to: string;
  name: string;
  Icon: ElementType;
};

const Navitems = ({ to, name, Icon }: NavProps) => {
  return (
    <MenuItem>
      <MenuLink to={`/${to}`}>
        <MenuName>{name}</MenuName>
        <Icon />
      </MenuLink>
    </MenuItem>
  );
};

export default Navitems;
