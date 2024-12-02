import { MobileMenuItem, MobileMenuLink, MobileMenuName } from "./style";
import { ElementType } from "react";

type NavProps = {
  to: string;
  name: string;
  Icon: ElementType;
};

function MobileNavItems({ to, name, Icon }: NavProps) {
  return (
    <MobileMenuItem>
      <MobileMenuLink to={`/${to}`}>
        <Icon />
        <MobileMenuName>{name}</MobileMenuName>
      </MobileMenuLink>
    </MobileMenuItem>
  );
}

export default MobileNavItems;
